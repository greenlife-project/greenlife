import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const tagsRouter = createTRPCRouter({
    getTags: publicProcedure.query(({ ctx }) => {
        //TODO check post count in function, while is all array
        return ctx.prisma.tag.findMany({
            select: {
                id: true,
                tagName: true,
                post: true
            }
        });
    }),
});
