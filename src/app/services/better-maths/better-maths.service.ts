import { Injectable } from '@angular/core';
import { LoggerOperationsService } from '../logger-service/logger-operations.service';

@Injectable()
export class BetterMathsService {
  constructor(private loggerService:LoggerOperationsService){}
  addMethod(a:number,b:number){
    //Its better because we are logging the result
    this.loggerService.log(a+b)
    return a+b
 }

}
