import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

// Decorators are functions that add metadata to classes, methods, properties, or parameters. They are used to define the behavior of the decorated element. In this case, we are using the @Controller and @Get decorators from the @nestjs/common package.
@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'all messages!!!!';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
