
import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})

export class MessageDetailsComponent {

 @Input() 
 message:any={}

 @Input()
 index:number=-1

 onDelete():void{
  this.delete.emit(this.index)
 }

 @Output()
 delete:EventEmitter<number>=new EventEmitter<number>()

}
