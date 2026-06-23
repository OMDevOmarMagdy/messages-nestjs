import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    console.log(typeof id);
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content);
    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content);
    return messages;
  }

  async createOne(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };
    const newContent = JSON.stringify(messages);
    await writeFile('messages.json', newContent);
  }
}
