import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    //inj messageservice
  constructor(private messagesService: MessagesService){}

    @Get()
    findAll(){
        return this.messagesService.findALl();
    }
}
