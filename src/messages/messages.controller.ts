import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    //inj messageservice
  constructor(private messagesService: MessagesService){}

    @Get()
    findAll(){
        return this.messagesService.findALl();
    }

    
    @Get(':id')
    findById(@Param() params){
        return this.messagesService.findById(+params.id);
        console.log(+params.id);
    }
    
}
