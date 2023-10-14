import { CACHE_URL } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { createPrismaRedisCache } from 'prisma-redis-middleware';
import type { Middleware } from 'prisma-redis-middleware/dist/types';
import Redis from 'ioredis';

const redis = new Redis(CACHE_URL);
const prisma = new PrismaClient();

const cacheMiddleware: Middleware = createPrismaRedisCache({
	storage: {
		type: 'redis',
		options: { client: redis, invalidation: { referencesTTL: 300 }, log: console }
	},
	cacheTime: 300,
	excludeModels: [],
	excludeMethods: ['count', 'groupBy'],
	onHit: (key) => {
		console.log('hit', key);
	},
	onMiss: (key) => {
		console.log('miss', key);
	},
	onError: (key) => {
		console.log('error', key);
	}
});

prisma.$use(cacheMiddleware);
