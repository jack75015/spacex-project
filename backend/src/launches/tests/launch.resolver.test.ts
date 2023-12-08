import { Test, TestingModule } from '@nestjs/testing';
import { LaunchDTO } from '../dto/launch.dto';
import { LaunchesService } from '../launches.service';
import { LaunchResolver } from '../resolvers/launch.resolver';

describe('LaunchResolver', () => {
  let resolver: LaunchResolver;
  let service: LaunchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LaunchResolver,
        {
          provide: LaunchesService,
          useValue: {
            getOneLaunch: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<LaunchResolver>(LaunchResolver);
    service = module.get<LaunchesService>(LaunchesService);
  });

  it('should return a single launch', async () => {
    const mockLaunch: LaunchDTO = {
      tbd: false,
      launch_library_id: null,
      id: '5eb87cdeffd86e000604b330',
    } as any;

    jest.spyOn(service, 'getOneLaunch').mockResolvedValueOnce(mockLaunch);

    const result = await resolver.getOneLaunch('exampleId');

    expect(result).toEqual(mockLaunch);
    expect(service.getOneLaunch).toHaveBeenCalledWith('exampleId');
  });
});
