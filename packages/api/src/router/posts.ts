import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";
import {itemCommentSchema} from "../validations/item";

export const postsRouter = createTRPCRouter({
    getPosts: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany({
            select: {
                id: true,
                title: true,
                description: true,
            }
        });
    }),
    getCountPost: publicProcedure.input(z.number())
        .query(async ({ctx, input: count}) => {
            return await ctx.prisma.post.findMany({
                take: count,
                include:{
                    tag: true,
                }
            })
        }),
    getPost: publicProcedure.input(z.string().optional())
        .query(({ctx, input: id}) => {
            const post = ctx.prisma.post.findUnique({
                where:{
                    id: id
                },
                select: {
                    user: {
                        select: {
                            first_name: true,
                            last_name: true,
                        },
                    },
                    Comment: {
                        select: {
                            user: {
                                select: {
                                    first_name: true,
                                    last_name: true,
                                }
                            },
                            text: true,
                            created: true
                        }
                    },
                    description: true,
                    title: true,
                    id: true,
                }
            })
            if(!post){
                return {}
            }
            return post
        }),
    addCommentItem: protectedProcedure.input(itemCommentSchema)
        .mutation(async ({ctx, input}) => {
            await ctx.prisma.comment.create({
                data: {
                    userId: input.userId,
                    text: input.text,
                    postId: input.id,
                }
            })
        }),
});
