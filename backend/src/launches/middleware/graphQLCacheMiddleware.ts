import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class GraphQLCacheMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  async use(req: Request, res: Response, next: Function) {
    const cacheKey = `${req.baseUrl}:${req.body.operationName}:${JSON.stringify(
      req.body.variables,
    )}`;
    const ttl = 30 * 1000; // 30sec
    const cachedResponse = await this.cacheManager.get(cacheKey);

    if (cachedResponse) {
      res.send(cachedResponse);
      return;
    }

    res.on('finish', async () => {
      if (res.statusCode === 200) {
        await this.cacheManager.set(cacheKey, res.get('Content-Type'), ttl);
      }
    });

    next();
  }
}
