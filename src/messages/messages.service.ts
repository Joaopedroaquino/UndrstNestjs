import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
public messages = [
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
        text:  'Terceira mensagem '
    }
];

findALl(){
    return this.messages;
}

}
