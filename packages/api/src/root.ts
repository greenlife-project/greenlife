import { authRouter } from "./router/auth";
import { createTRPCRouter } from "./trpc";
import {itemRouter} from "./router/item";
import {guideRouter} from "./router/guides";
import {tagsRouter} from "./router/tags";
import {postsRouter} from "./router/posts";

export const appRouter = createTRPCRouter({
    auth: authRouter,
    item: itemRouter,
    guide: guideRouter,
    tag: tagsRouter,
    post: postsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
