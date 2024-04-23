import { MathsService } from "../maths/maths.service"

export default function State(MathsService:MathsService){
 let a=MathsService.state
 if(a<2){
    return 'the number is small'
 }
 else{
    return 'the number is big'
 }
}