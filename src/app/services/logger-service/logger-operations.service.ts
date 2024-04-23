import { Injectable } from '@angular/core';

@Injectable()
export class LoggerOperationsService {
  log(a:any){
    console.log('I am a logger and logging  '+a)
  }
  constructor() { }
}
