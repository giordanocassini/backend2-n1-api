import { CountryInfoService } from './country-info.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';

@Controller('country-info')
export class CountryInfoController {
  constructor(private readonly countryInfoService: CountryInfoService) {}

  @Get(':countryName')
  async getCountryInfo(
    @Param('countryName') countryName: string,
  ): Promise<string> {
    try {
      return await this.countryInfoService.getCountryInfo(countryName);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
