import { Injectable } from '@nestjs/common';
import { CountriesApiService } from 'src/infra/countries-api/countries-api.service';

@Injectable()
export class CountryInfoService {
  constructor(private readonly countriesAPI: CountriesApiService) {}

  async getCountryInfo(countryName: string): Promise<string> {
    const response = await this.countriesAPI.getCountryInfoByName(countryName);
    return JSON.stringify(response.data[0]);
  }
}
