import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const authRouter = createTRPCRouter({
    getSession: publicProcedure.query(({ ctx }) => {
        return ctx.session;
    }),
    getSecretMessage: protectedProcedure.query(() => {
        // testing type validations of overridden next-auth Session in @acme/auth package
        return "you can see this secret message!";
    }),
    verifyToken: publicProcedure.input(z.string().optional())
        .mutation(async({ctx, input: token}) => {
            const verificationToken = await ctx.prisma.verificationToken.findUnique({
                where: {
                    token: token
                }
            });
            if(!verificationToken){
                return {reason: "false"}
            }
            if (verificationToken.expires > new Date()) {
                await ctx.prisma.user.update({
                    where: {
                        id: verificationToken.userId
                    },
                    data: {
                        phoneVerificated: true
                    }
                });
                await ctx.prisma.verificationToken.delete({
                    where: {
                        token: token
                    }
                });
                return {reason: "true"}
            }else{
                return {reason: "expire"};
            }
        })
});
