import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

public messages = [
    {
        id: 1,
        text:  'Primeira mensagem'
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

findById(id: number) {
return this.messages.find((message) => message.id === id);
}

}
