import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    findAll(){
        return [
            {
                id: 1,
                text:  'Primeria mensagem'
            },

            {
                id: 2,
                text:  'Segunda mensagem'
            },
            {
                id: 3,
                text:  'Terceira mensagem'
            }
        ];
    }
}
