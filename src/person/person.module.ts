import { Module } from '@nestjs/common';
import { PersonService } from './services/person.service';
import { PersonController } from './controller/person.controller';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
