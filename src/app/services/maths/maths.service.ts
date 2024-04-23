import { Injectable } from '@angular/core';

@Injectable()
export class MathsService {
  state=1
  addMethod(a:number,b:number){
     return a+b
  }
  substractMethod(a:number,b:number){
    return a-b
  }
  constructor() { }
}
