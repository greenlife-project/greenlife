import { Prisma } from "@prisma/client";
import { z } from "zod";

export const itemCommentSchema = z.object({
    id: z.string(),
    text: z.string(),
    userId: z.string(),
});
