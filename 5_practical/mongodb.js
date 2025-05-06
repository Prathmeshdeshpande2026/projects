const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017"; 

const database = 'studentDB';
const client = new MongoClient(url);

const dbConnect = async () => {
    const result = await client.connect();
    const db = result.db(database);
    return db.collection('students');
};

module.exports = dbConnect; 
