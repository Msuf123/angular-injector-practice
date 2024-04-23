import { Component, Self, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathsService } from './services/maths/maths.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  formBuilder=inject(FormBuilder)
  constructor(private maths:MathsService){
  }
  inputAdd=this.formBuilder.group({
    a:[''],
    b:['']
  })
  currentNumber:number=0
  addNumbers(){
   const objNumber:any=this.inputAdd.value
   this.currentNumber=0
   console.log(this.inputAdd.value)
   for(let i in objNumber){
    console.log(Number(objNumber[i]))
      this.currentNumber+=Number(objNumber[i])
   }
  }
  title = 'angular-injector-practice';
}
