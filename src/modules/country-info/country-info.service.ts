import { Injectable } from '@nestjs/common';
import { CountriesApiService } from 'src/infra/countries-api/countries-api.service';
import { NewsApiService } from 'src/infra/news-api/news-api.service';

@Injectable()
export class CountryInfoService {
  constructor(
    private readonly countriesAPI: CountriesApiService,
    private readonly newsAPI: NewsApiService, // usar este obj pra fazer a req a api de noticias.
  ) {}

  async getCountryInfo(countryName: string): Promise<string> {
    try {
      const countriesAPIResponse =
        await this.countriesAPI.getCountryInfoByName(countryName);
      const { cca2 } = countriesAPIResponse.data[0];
      if (!cca2)
        throw new Error('Country abreviation not found for ' + countryName);
      const newsAPIResponse = await this.newsAPI.getNewsByCountry(cca2);
      const countryInfoObj = {
        countryInfo: countriesAPIResponse.data[0],
        firstFoundNews: newsAPIResponse.data.articles[0],
      };
      return JSON.stringify(countryInfoObj);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
