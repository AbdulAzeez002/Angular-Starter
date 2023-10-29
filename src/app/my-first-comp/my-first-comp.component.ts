import { Component,inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {

// private service:MyFirstService=inject(MyFirstService )    property injection of service

  constructor(private service:MyFirstService) {   // constructor injection of service
     this.messages=this.service.getAllMessages()
     this.isSubmitted=this.messages.length>0
  }

  name:string='';
  email:string='';
  message:string='';
  isSubmitted:boolean=false;
  messages:Array<any>=[]

  onSubmit():void{
  this.isSubmitted=true
  this.service.insert({
    'name':this.name,
    'email':this.email,
    'message':this.message
  })
  // console.log(this.messages,'messges')
  }

  deleteMessage(index:number):void{
    this.service.deleteMessage(index)
  }

}
