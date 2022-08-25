
const { MongoClient } = require('mongodb');
const MONGODB_URI = "mongodb+srv://testUsername:testPassword@cluster0.6xo34mp.mongodb.net/?retryWrites=true&w=majority"; 
const DATABASE = "Cluster0"; 
const COLLECTION = "SavedResults"; 
const client = new MongoClient(MONGODB_URI);


const saveResult = async (result) => {
  console.log(`saving result: ${result}`)
  const dbResult = await client.db(DATABASE).collection(COLLECTION).insertOne({
    timestamp: Date.now(),
    value: result
  });
  console.log(`dbResult: ${dbResult}`);
  return dbResult;
}

module.exports = { saveResult }