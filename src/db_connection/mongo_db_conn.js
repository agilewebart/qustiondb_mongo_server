const config = require('../config');
const { MongoClient } = require('mongodb');

let dbClient = null;

module.exports.executeQry = async (database_name, collection_name) => {

    try {
        const client = new MongoClient(config.DB_CONFIG_MONGO.MONGO_URL_ATLAS);
        await client.connect();
        dbClient = client.db(database_name).collection(collection_name);
        // console.log("---?", dbClient)
        // console.log('Connected to MongoDB');
        return dbClient;
    } catch (err) {

        console.error('Error connecting to MongoDB:', err);
        // throw err;
        return dbClient;

    }
}





module.exports.create_Collection = async (database_name, collection_name) => {
    try {
        const client = new MongoClient(config.DB_CONFIG_MONGO.MONGO_URL_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const database = client.db(database_name);

        const collections = await database.listCollections({ name: collection_name }).toArray();

        if (collections.length == 0) {
            const result = await database.createCollection(collection_name);
            console.log(`This ${result.collectionName} Collection is created under this ${database_name} database `);
            return true;
        } else {
            console.log(`This ${collection_name} Collection is already exist on this ${database_name} database `);
            return false;
        }

    } catch (err) {
        console.error('Error while Creating Collection :', err);
        // throw err;
        return false;
    }
}




module.exports.delete_Collection = async (database_name, collection_name) => {
    try {
        const client = new MongoClient(config.DB_CONFIG_MONGO.MONGO_URL_ATLAS);
        await client.connect();
        const database = client.db(database_name);
        const collections = await database.listCollections({ name: collection_name }).toArray();
        if (collections.length == 0) {
            console.log("No collection is present to delete");
            return false;
        }
        else {
            const collection = database.collection(collection_name);
            const result = await collection.drop();
            console.log(`This ${collection_name}Collection is deleted from this ${database_name} successfully ${result}`);
            return true;
        }
        return true;
    } catch (err) {
        console.error('Error while deleting collection  :', err);
        return false;
    }
}





