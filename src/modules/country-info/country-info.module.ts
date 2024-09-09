import { Module } from '@nestjs/common';
import { CountryInfoController } from './country-info.controller';
import { CountryInfoService } from './country-info.service';
import { CountriesApiModule } from 'src/infra/countries-api/countries-api.module';
import { NewsApiModule } from 'src/infra/news-api/news-api.module';

@Module({
  controllers: [CountryInfoController],
  providers: [CountryInfoService],
  imports: [CountriesApiModule, NewsApiModule],
})
export class CountryInfoModule {}
