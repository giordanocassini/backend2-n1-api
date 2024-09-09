import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NewsApiService {
  async getNewsByCountry(countryAbv: string) {
    try {
      return await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${countryAbv}&apiKey=5bcda1c918994518b835ce029b749741`,
      );
    } catch (error) {
      const strError = 'News API error: ' + error.message;
      Logger.error(strError);
      throw new Error(strError);
    }
  }
}
