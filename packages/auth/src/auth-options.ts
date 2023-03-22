import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@garden/database"

const argon2 = require('argon2');

export const authOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "credentials",
            id: "credentials",
            credentials: {
                phone: { label: "Номер телефона", type: "tel" },
                password: { label: "Пароль", type: "password" },
            },
            async authorize(credentials, req){
                if(!credentials){
                    throw Error("Вы не заполнили все поля")
                }
                    const user = await prisma.user.findUnique({
                        where: {
                            phone: credentials.phone,
                        },
                        select: {
                            id: true,
                            first_name: true,
                            phoneVerificated: true,
                            last_name: true,
                            password: true,
                            phone: true,
                        },
                    });
                    if (!user) {
                        throw Error("Вы не зарегестрированы");
                    }
                    if(!user.phoneVerificated){
                        throw Error("Вы не подвердили свой телефон");
                    }
                    if(await argon2.verify(user.password, "password")){
                        return {
                            id: user.id, first_name: user.first_name, last_name: user.last_name,
                            phone: user.phone
                        }
                    }else{
                        throw Error("Пароль не правильный");
                    }
                    return null
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    user: user,
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
                };
            }

            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.accessTokenExpires = token.accessTokenExpires;
            return session;
        },
    },
};

