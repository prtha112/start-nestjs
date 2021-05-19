# start-nestjs

yarn add global @nestjs/cli
yarn
yarn run start
nest g controller cats
nest g service cats

yarn add @nestjs/typeorm typeorm pg
yarn add dotenv

yarn add sequelize sequelize-cli sequelize-typescript

touch .sequelizerc
cat >>
const path = require('path');

module.exports = {
    'seeders-path': path.resolve('src/database', 'seeders'),
    'migrations-path': path.resolve('src/database', 'migrations'),
    'config': path.resolve('src/database', 'config.ts'),
}
<<

yarn sequelize init

>>https://github.com/tkssharma/nestjs-advance-course/tree/main/nestjs-sequelize-apis/src