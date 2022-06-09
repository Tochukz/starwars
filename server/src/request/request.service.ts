import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RequestService {

  constructor(private httpService: HttpService) {}
    
  async post(url: string, data: object): Promise<any> {
    const response$ =  this.httpService.post(url, data);
    const  responseData = await lastValueFrom(response$);   
    return responseData;
  }

  async put(url: string, data: object): Promise<any> {
    const response$ = await this.httpService.put(url, data);
    const responseData = await lastValueFrom(response$);
    return responseData;
  }

  async get(url: string): Promise<any> {
    const response$ =  this.httpService.get(url);
    const responseData = await lastValueFrom(response$);  
    return responseData;
  }

  async delete(url: string): Promise<any> {
    const response$ =  this.httpService.delete(url);
    const responseData = await lastValueFrom(response$);
    return responseData;           
  }
}
