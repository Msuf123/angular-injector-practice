import { Injectable } from '@angular/core';

@Injectable()
export class MathsService {
  addMethod(a:number,b:number){
     return a+b
  }
  substractMethod(a:number,b:number){
    return a-b
  }
  constructor() { }
}
