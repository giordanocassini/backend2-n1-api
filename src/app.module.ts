import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryInfoModule } from './modules/country-info/country-info.module';
import { CountriesApiModule } from './infra/countries-api/countries-api.module';

@Module({
  imports: [CountryInfoModule, CountriesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
