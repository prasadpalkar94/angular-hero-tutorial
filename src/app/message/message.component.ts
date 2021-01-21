import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../messageService/message-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService:MessageServiceService) { }

  ngOnInit(): void {
  }

  

}
