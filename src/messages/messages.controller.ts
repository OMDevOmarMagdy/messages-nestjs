import { Controller, Get, Post } from '@nestjs/common';

// Decorators are functions that add metadata to classes, methods, properties, or parameters. They are used to define the behavior of the decorated element. In this case, we are using the @Controller and @Get decorators from the @nestjs/common package.
@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'all messages!!!!';
  }

  @Post()
  createMessage() {
    return 'Messages has been created successfully';
  }

  @Get('/:id')
  getMessage() {
    return 'Message found with this specific id';
  }
}
