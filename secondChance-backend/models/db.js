// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URL with authentication options
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB;

let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    try {
        const client = new MongoClient(url);

        // Connect to MongoDB
        await client.connect();

        // Connect to database and store in variable dbInstance
        dbInstance = client.db(dbName);

        // Return database instance
        return dbInstance;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

module.exports = connectToDatabase;
