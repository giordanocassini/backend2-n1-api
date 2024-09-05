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
      Logger.error('Countries API error: ' + error.message);
    }
  }
}
