// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance
    };

    const client = new MongoClient(url);

    // Task 1: Connect to MongoDB
    try {
        await client.connect();
        dbInstance = client.db(dbName)
        return dbInstance;
    } catch (error) {
        console.error("Failed to connect to the database", error)
        throw error;
    }

    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}

    // Task 3: Return database instance
    // {{insert code}}
}

module.exports = connectToDatabase;
