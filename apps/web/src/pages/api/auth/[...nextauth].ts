import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma/prisma"

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
            async authorize(credentials, req) {
                if(!credentials){
                    return Error("Вы не заполнили все поля")
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
                    },
                });
                if (!user) {
                    return Error("Вы не зарегестрированы");
                }
                if(!user.phoneVerificated){
                    return Error("Вы не подвердили свой телефон");
                }
                try {
                    if(await argon2.verify(user.password, "password")){
                        const user = { id: user.id, first_name: user.first_name, last_name: user.last_name,
                            phone: user.phone }
                        return user
                    }else{
                        return Error("Пароль не правильный");
                    }
                }catch (e){
                    return null;
                }
            }
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

export default NextAuth(authOptions);
