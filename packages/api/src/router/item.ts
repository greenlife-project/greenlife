import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";
import {itemCommentSchema} from "../validations/item";

export const itemRouter = createTRPCRouter({
    getItems: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.item.findMany({
            select: {
                price: true,
                img: true,
                id: true,
                title: true,
            }
        });
    }),
    getItem: publicProcedure.input(z.string().optional())
        .query(({ctx, input: id}) => {
            const item = ctx.prisma.item.findUnique({
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
                    price: true,
                    description: true,
                    title: true,
                    img: true,
                    id: true,
                }
            })
            if(!item){
                return {}
            }
            return item
        }),
    addCommentItem: protectedProcedure.input(itemCommentSchema)
        .mutation(async ({ctx, input}) => {
            await ctx.prisma.commentShop.create({
                data: {
                    userId: input.userId,
                    text: input.text,
                    itemId: input.id,
                }
            })
        }),
    getItemsCount: publicProcedure.input(z.number())
        .query(async ({ctx, input: count}) => {
            return await ctx.prisma.item.findMany({
                take: count,
            })
        }),
    getMyItems: protectedProcedure.query(async({ctx}) => {
        //@ts-ignore
        const id = ctx.session.user.id;
        const items = await ctx.prisma.item.findMany({
            where: {
                userId: id
            }
        })
        return items
    })
});
