import { RocketsService } from './rockets.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from 'src/app.controller';
import { RocketsResolver } from './resolvers/rockets.resolver';
import { RocketResolver } from './resolvers/rocket.resolver';
import { Rocket } from './dto/rocket.dto';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [RocketsResolver, RocketResolver, RocketsService, Rocket],
})
export class RocketsModule {}
