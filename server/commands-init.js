npm init &&
npm i --save-dev @babel/core @babel/preset-env @babel/node babel-watch &&
npm i sequelize pg express morgan cors &&
npm i &&
touch server.js routes.js models.js resetDb.js seed.js &&
createdb dance_everyday_db
