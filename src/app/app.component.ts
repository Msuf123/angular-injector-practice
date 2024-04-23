import { Component, Inject, Self, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathsService } from './services/maths/maths.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { token } from './app.config';

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
  state=inject(token)
  constructor(@Inject('Maths_Service') private maths:MathsService){
    console.log(`This is a current state ${this.state}`)
  }
  inputAdd=this.formBuilder.group({
    a:[''],
    b:['']
  })
  currentNumber:number=0
  addNumbers(){
   const objNumber=this.inputAdd.value
   this.currentNumber=this.maths.addMethod(Number(objNumber.a),Number(objNumber.b))
  }
  title = 'angular-injector-practice';
}
