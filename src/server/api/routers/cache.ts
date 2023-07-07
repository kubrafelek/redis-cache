import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { redis } from "~/lib/redis";

export const cacheRouter = createTRPCRouter({

  getUserCache: publicProcedure.query(async ({ ctx: { prisma } }) => {

    // try {
    //   const user = await prisma.user.findFirst;
    //   if (!user) {
    //     return new Response("Error");
    //   }

    //   await redis.set(user.id, JSON.stringify(user));
    //   console.log("USER: ", JSON.stringify(user), "\n");
    //   return JSON.stringify(session);

    // } catch (error) {
    //   console.log("ERROR ------------>", error);
    //   return error;
    // }
  }),
});