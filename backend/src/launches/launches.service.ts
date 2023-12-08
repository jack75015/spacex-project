import { Injectable } from '@nestjs/common';
import axios from 'axios';

const launchesAPI = 'https://api.spacexdata.com/v5/launches';

@Injectable()
export class LaunchesService {
  async getAllLaunches(page: number = 1, limit: number = 10) {
    try {
      const response = await axios.post(`${launchesAPI}/query`, {
        options: {
          pagination: true,
          page: page,
          limit: limit,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch all launches');
    }
  }

  async getOneLaunch(id: string) {
    try {
      const response = await axios.get(`${launchesAPI}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch launch with id ${id}`);
    }
  }
}
