import { LaunchesService } from './launches.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LaunchesResolver } from './resolvers/launches.resolver';
import { LaunchDTO } from './dto/launch.dto';
import { LaunchesDTO } from './dto/launches.dto';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LaunchResolver } from './resolvers/launch.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [
    LaunchResolver,
    LaunchesResolver,
    LaunchesService,
    LaunchDTO,
    LaunchesDTO,
  ],
})
export class LaunchesModule {}
