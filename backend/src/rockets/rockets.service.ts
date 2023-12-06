import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RocketsService {
  async getAllRockets() {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch all rockets');
    }
  }

  async getOneRocket(id: string) {
    try {
      const response = await axios.get(
        `https://api.spacexdata.com/v4/rockets/${id}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch rocket with id ${id}`);
    }
  }
}
