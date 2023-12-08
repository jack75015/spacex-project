import axios from 'axios';
import { LaunchesService } from '../launches.service';

jest.mock('axios');

describe('LaunchesService', () => {
  let launchesService: LaunchesService;

  beforeEach(() => {
    launchesService = new LaunchesService();
  });

  it('should fetch all launches', async () => {
    const mockData = [
      {
        tbd: false,
        launch_library_id: null,
        id: '5eb87cdeffd86e000604b330',
      },
    ];

    (
      axios.post as jest.MockedFunction<typeof axios.post>
    ).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await launchesService.getAllLaunches();

    expect(result).toEqual(mockData);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.spacexdata.com/v5/launches/query',
      { options: { pagination: true, page: 1, limit: 10 } },
    );
  });

  it('should fetch a single launch by ID', async () => {
    const mockLaunchId = '123';

    const mockData = [
      {
        tbd: false,
        launch_library_id: null,
        id: '5eb87cdeffd86e000604b330',
      },
    ];

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await launchesService.getOneLaunch(mockLaunchId);

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.spacexdata.com/v5/launches/${mockLaunchId}`,
    );
  });

  it('should throw an error if unable to fetch all launches', async () => {
    (
      axios.post as jest.MockedFunction<typeof axios.post>
    ).mockRejectedValueOnce(new Error('Unable to fetch all launches'));

    await expect(launchesService.getAllLaunches()).rejects.toThrowError(
      'Unable to fetch all launches',
    );
  });

  it('should throw an error if unable to fetch a launch by ID', async () => {
    const mockLaunchId = '123';

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
      new Error(`Unable to fetch launch with id ${mockLaunchId}`),
    );

    await expect(
      launchesService.getOneLaunch(mockLaunchId),
    ).rejects.toThrowError(`Unable to fetch launch with id ${mockLaunchId}`);
  });
});
