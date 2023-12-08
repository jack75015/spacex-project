import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { LaunchesService } from '../launches.service';
import { LaunchesDTO } from '../dto/launches.dto';

@Resolver(() => LaunchesDTO)
export class LaunchesResolver {
  constructor(private readonly launchesService: LaunchesService) {}

  @Query(() => LaunchesDTO)
  async getAllLaunches(
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
  ): Promise<LaunchesDTO[]> {
    return await this.launchesService.getAllLaunches(page, limit);
  }
}
