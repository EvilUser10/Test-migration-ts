import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Person } from './src/person/entities/person.entity';
import { CreatePerson1712263493702 } from './migrations/1712263493702-CreatePerson';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'testmigration',
    entities: [Person],
    synchronize: true,
    migrations: [CreatePerson1712263493702]
});