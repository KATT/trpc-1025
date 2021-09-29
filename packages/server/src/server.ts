import * as trpc from "@trpc/server";

export const appRouter = trpc.router().query("hello", {
  resolve: async () => {
    return ", world";
  },
});

export type AppRouter = typeof appRouter;
