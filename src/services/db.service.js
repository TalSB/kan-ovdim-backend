const MongoClient = require("mongodb").MongoClient;

module.exports = {
  getCollection,
};

// Database Name
const dbName = "KanOvdim";

const dbURL = "mongodb+srv://talkoosh:209323492Tal@cluster0.rxry5xm.mongodb.net/?retryWrites=true&w=majority";

var dbConn = null;

async function getCollection(collectionName) {
  try {
    const db = await connect();
    const collection = await db.collection(collectionName);
    return collection;
  } catch (err) {
    throw err;
  }
}

async function connect() {
  if (dbConn) return dbConn;
  try {
    const client = await MongoClient.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    dbConn = db;
    return db;
  } catch (err) {
    throw err;
  }
}
