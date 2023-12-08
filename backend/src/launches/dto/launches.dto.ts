import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LaunchDTO } from './launch.dto';

@ObjectType()
export class LaunchesDTO {
  @Field(() => [LaunchDTO])
  docs: LaunchDTO[];

  @Field()
  totalDocs: number;

  @Field({ nullable: true })
  offset: number;

  @Field()
  limit: number;

  @Field()
  totalPages: number;

  @Field()
  page: number;

  @Field()
  pagingCounter: number;

  @Field()
  hasPrevPage: boolean;

  @Field()
  hasNextPage: boolean;

  @Field({ nullable: true })
  prevPage: number;

  @Field({ nullable: true })
  nextPage: number;
}
