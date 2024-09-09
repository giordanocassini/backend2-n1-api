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
      const response =
        await this.countriesAPI.getCountryInfoByName(countryName);
      const countriesAPIResponse = response.data[0];
      // countryAPIResponse possui a info da abreviação do pais que deve ser enviada pra requisição a API de noticias.
      // você deve extrair essa informação e usa-la para fazer a requisição a api de noticias.
      // por fim, basta juntar as informações retornadas das duas API's em um objeto só e retorna-las.
      return JSON.stringify({}); // trocar o objeto vazio por um com info das duas apis.
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
