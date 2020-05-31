const mysql = require('mysql');
//require('dotenv').config();

const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DATABASE;
const port = process.env.PORT;
const password = process.env.PASSWORD;


const pool = new mysql.createPool({
  connectionLimit: 100,
  host,
  user,
  port,
  password,
  database,
});



module.exports = pool;