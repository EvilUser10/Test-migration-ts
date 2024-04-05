import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'testmigration',
    entities: [],
    synchronize: true,
  }),
    TypeOrmModule.forFeature([Person]),
    PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
