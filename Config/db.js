const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster =  process.env.DB_CLUSTER;
const dbname =  process.env.DB_NAME;

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log(`Database Connected successfully`.bold.blue);
}); 

module.exports = db;