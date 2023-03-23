import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";
import {itemCommentSchema} from "../validations/item";

export const guideRouter = createTRPCRouter({
    getGuides: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.guide.findMany({
            select: {
                id: true,
                title: true,
                img: true,
            }
        });
    }),
    getGuide: publicProcedure.input(z.string().optional())
        .query(({ctx, input: id}) => {
            const guide = ctx.prisma.guide.findUnique({
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
                    comments: {
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
                    id: true,
                    title: true,
                    description: true,
                    steps: true,
                    img: true,
                }
            })
            if(!guide){
                return {}
            }
            return guide
        }),
    addCommentGuide: protectedProcedure.input(itemCommentSchema)
        .mutation(async ({ctx, input}) => {
            await ctx.prisma.guideComment.create({
                data: {
                    userId: input.userId,
                    text: input.text,
                    guideId: input.id,
                }
            })
        }),
    getGuideount: publicProcedure.input(z.number())
        .query(async ({ctx, input: count}) => {
            return await ctx.prisma.guide.findMany({
                take: count,
            })
        }),
    getMyGuide: protectedProcedure.query(async({ctx}) => {
        //@ts-ignore
        const id = ctx.session.user.id
        const guides = await ctx.prisma.guide.findMany({
            where: {
                userId: id
            }
        })
        return guides
    })
});
