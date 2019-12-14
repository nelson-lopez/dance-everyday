import { DynamicModule, Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { VenueModule } from './venue/venue.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from './config/ormconfig';

// export function DatabaseOrmModule(): DynamicModule {
//   // we could load the configuration from dotEnv here,
//   // but typeORM cli would not be able to find the configuration file.

//   return TypeOrmModule.forRoot(ormconfig);
// }

@Module({
  imports: [EventModule, VenueModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
