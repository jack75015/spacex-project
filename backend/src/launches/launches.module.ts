import { LaunchesService } from './launches.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LaunchesResolver } from './resolvers/launches.resolver';
import { LaunchDTO } from './dto/launch.dto';
import { LaunchesDTO } from './dto/launches.dto';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LaunchResolver } from './resolvers/launch.resolver';
import { CacheModule } from '@nestjs/cache-manager';
import { GraphQLCacheMiddleware } from './middleware/graphQLCacheMiddleware';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    CacheModule.register(),
  ],
  providers: [
    LaunchResolver,
    LaunchesResolver,
    LaunchesService,
    LaunchDTO,
    LaunchesDTO,
    GraphQLCacheMiddleware,
  ],
})
export class LaunchesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GraphQLCacheMiddleware).forRoutes('graphql');
  }
}
