import { Injectable } from '@nestjs/common';
import { CountriesApiService } from 'src/infra/countries-api/countries-api.service';

@Injectable()
export class CountryInfoService {
  constructor(private readonly countriesAPI: CountriesApiService) {}

  async getCountryInfo(countryName: string): Promise<string> {
    try {
      const response =
        await this.countriesAPI.getCountryInfoByName(countryName);
      return JSON.stringify(response.data[0]);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
