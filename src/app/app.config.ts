import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MathsService } from './services/maths/maths.service';
import { BetterMathsService } from './services/better-maths/better-maths.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),{provide:MathsService,useClass:BetterMathsService}]
};
