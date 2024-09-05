import { CountryInfoService } from './country-info.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('country-info')
export class CountryInfoController {
  constructor(private readonly countryInfoService: CountryInfoService) {}

  @Get(':countryName')
  async getCountryInfo(
    @Param('countryName') countryName: string,
  ): Promise<string> {
    return this.countryInfoService.getCountryInfo(countryName);
  }
}
