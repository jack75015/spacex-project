import { Resolver, Query } from '@nestjs/graphql';
import { RocketsService } from '../rockets.service';
import { Rocket } from '../dto/rocket.dto';

@Resolver(() => Rocket)
export class RocketsResolver {
  constructor(private readonly rocketsService: RocketsService) {}

  @Query(() => [Rocket])
  async getAllRockets(): Promise<Rocket[]> {
    return await this.rocketsService.getAllRockets();
  }
}
