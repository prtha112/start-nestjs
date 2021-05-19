# start-nestjs

yarn add global @nestjs/cli <br/>
yarn <br/>
yarn run start <br/>
nest g controller cats <br/>
nest g service cats <br/>


yarn add @nestjs/typeorm typeorm pg<br/>
yarn add dotenv<br/>

yarn add sequelize sequelize-cli sequelize-typescript<br/>

touch .sequelizerc<br/>
cat >><br/>
```<br/>
const path = require('path');<br/>

module.exports = {<br/>
    'seeders-path': path.resolve('src/database', 'seeders'),<br/>
    'migrations-path': path.resolve('src/database', 'migrations'),<br/>
    'config': path.resolve('src/database', 'config.ts'),<br/>
}<br/>
```
<<

yarn sequelize init<br/>

>>https://github.com/tkssharma/nestjs-advance-course/tree/main/nestjs-sequelize-apis/src
