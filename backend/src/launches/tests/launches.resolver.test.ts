import { Test, TestingModule } from '@nestjs/testing';
import { LaunchesDTO } from '../dto/launches.dto';
import { LaunchesService } from '../launches.service';
import { LaunchesResolver } from '../resolvers/launches.resolver';

describe('LaunchesResolver', () => {
  let resolver: LaunchesResolver;
  let service: LaunchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LaunchesResolver,
        {
          provide: LaunchesService,
          useValue: {
            getAllLaunches: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<LaunchesResolver>(LaunchesResolver);
    service = module.get<LaunchesService>(LaunchesService);
  });

  it('should return all launches', async () => {
    const mockLaunches: LaunchesDTO = {
      docs: [
        {
          tbd: false,
          launch_library_id: null,
          id: '5eb87cdeffd86e000604b330',
        },
        {
          tbd: false,
          launch_library_id: null,
          id: '5eb87cdeffd86e000604b330',
        },
      ] as any, // "as any": to avoid complete fields
      totalDocs: 205,
      offset: 0,
      limit: 10,
      totalPages: 21,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: true,
      prevPage: null,
      nextPage: 2,
    };

    jest.spyOn(service, 'getAllLaunches').mockResolvedValueOnce(mockLaunches);

    const result = await resolver.getAllLaunches(1, 10);

    expect(result).toEqual(mockLaunches);
    expect(service.getAllLaunches).toHaveBeenCalledWith(1, 10);
  });
});
