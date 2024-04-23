import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MathsService } from './services/maths/maths.service';
import { BetterMathsService } from './services/better-maths/better-maths.service';
import { LoggerOperationsService } from './services/logger-service/logger-operations.service';
export const token=new InjectionToken<string>('I will show number')

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),{provide:MathsService,useClass:BetterMathsService},LoggerOperationsService,{provide:token,useValue:'jack',multi:true},{provide:token,useValue:'jane',multi:true}]

};
