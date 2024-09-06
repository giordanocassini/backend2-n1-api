import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesApiService {
  async getCountryInfoByName(countryName: string) {
    try {
      return await axios.get(
        'https://restcountries.com/v3.1/name/' + countryName,
      );
    } catch (error) {
      const strError = 'Countries API error: ' + error.message;
      Logger.error(strError);
      throw new Error(strError);
    }
  }
}
