import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { LaunchesService } from '../launches.service';
import { LaunchDTO } from '../dto/launch.dto';

@Resolver(() => LaunchDTO)
export class LaunchResolver {
  constructor(private readonly launchesService: LaunchesService) {}

  @Query(() => LaunchDTO)
  async getOneLaunch(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<LaunchDTO> {
    return await this.launchesService.getOneLaunch(id);
  }
}
