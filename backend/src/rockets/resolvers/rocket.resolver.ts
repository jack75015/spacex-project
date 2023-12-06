import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { RocketsService } from '../rockets.service';
import { Rocket } from '../dto/rocket.dto';

@Resolver(() => Rocket)
export class RocketResolver {
  constructor(private readonly rocketsService: RocketsService) {}

  @Query(() => Rocket)
  async getOneRocket(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Rocket> {
    return await this.rocketsService.getOneRocket(id);
  }
}
