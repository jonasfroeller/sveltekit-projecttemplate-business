import type Prisma from "prisma";
import { PrismaClient } from "@prisma/client";
import { createPrismaRedisCache } from "prisma-redis-middleware";
import Redis from "ioredis";

const redis = new Redis();

const prisma = new PrismaClient();

const cacheMiddleware: Prisma.Middleware = createPrismaRedisCache({
    storage: { type: "redis", options: { client: redis, invalidation: { referencesTTL: 300 }, log: console } },
    cacheTime: 300,
    excludeModels: [],
    excludeMethods: ["count", "groupBy"],
    onHit: (key) => {
        console.log("hit", key);
    },
    onMiss: (key) => {
        console.log("miss", key);
    },
    onError: (key) => {
        console.log("error", key);
    },
});

prisma.$use(cacheMiddleware);