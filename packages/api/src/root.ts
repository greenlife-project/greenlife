import { authRouter } from "./router/auth";
import { createTRPCRouter } from "./trpc";
import {itemRouter} from "./router/item";

export const appRouter = createTRPCRouter({
    auth: authRouter,
    item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
