import type {
    Post,
    RedditAPIClient,
    RedisClient,
    Scheduler,
    ZRangeOptions,
} from '@devvit/public-api';
import { Devvit } from '@devvit/public-api';


/*
 * Service
 * This class is as the main service logic for game of tag
 * It is responsible for:
 * -
 */
export class Service {
    readonly redis: RedisClient;
    readonly reddit?: RedditAPIClient;
    readonly scheduler?: Scheduler;
  
    constructor(context: { redis: RedisClient; reddit?: RedditAPIClient; scheduler?: Scheduler }) {
      this.redis = context.redis;
      this.reddit = context.reddit;
      this.scheduler = context.scheduler;
    }
}
