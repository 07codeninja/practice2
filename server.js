const express = require("express")
const app = express();
const dotenv = require("dotenv")
const mySqlpool = require("./sql_db");
const connectMongoDb = require("./mongo_db");


dotenv.config();
connectMongoDb();

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

mySqlpool.query('SELECT 1').then(()=>{
    console.log('MySql DB connected')
});