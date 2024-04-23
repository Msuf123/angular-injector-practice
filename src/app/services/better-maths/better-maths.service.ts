import { Injectable } from '@angular/core';

@Injectable()
export class BetterMathsService {
  addMethod(a:number,b:number){
    //Its better because we are logging the result
    console.log(a+b)
    return a+b
 }

}
