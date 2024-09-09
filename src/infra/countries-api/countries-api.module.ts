import { Module } from '@nestjs/common';
import { CountriesApiService } from './countries-api.service';

@Module({
  providers: [CountriesApiService],
  exports: [CountriesApiService],
})
export class CountriesApiModule {}
