import { authRouter } from "./router/auth";
import { createTRPCRouter } from "./trpc";
import {itemRouter} from "./router/item";
import {guideRouter} from "./router/guides";

export const appRouter = createTRPCRouter({
    auth: authRouter,
    item: itemRouter,
    guide: guideRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
