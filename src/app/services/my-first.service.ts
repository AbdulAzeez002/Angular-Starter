import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages:Array<any>=[]

  insert(message:{name:string,email:string,message:string}):void{
    this.messages.push(message)
  }

  getAllMessages():any[]{
    return this.messages
  }

  deleteMessage(index:number):void{
  this.messages.splice(index,1)
  }

  init():void{

    this.insert({
      "name":'abdul',
      "message":"abc",
       "email":"abdul@gmail.com"
    })

    this.insert({
      "name":'hisn',
      "message":"abc",
       "email":"hisan@gmail.com"
    })

    this.insert({
      "name":'ajay',
      "message":"abc",
       "email":"ajay@gmail.com"
    })

  }
  constructor() {
    this.init()
   }
}
