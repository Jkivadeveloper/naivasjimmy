const { MongoClient } = require('mongodb');

const uri =
'mongodb+srv://immy:8oiPYF2BXS3tTJrY@cluster0.36wq2pq.mongodb.net/?retryWrites=true&w=majority';

let client;

const getDB = () => {
  if (!client) {
    console.log('Creating a new client!');
    client = new MongoClient(uri);
  } else {
    console.log('Reusing the old client');
  }

  const database = client.db('test');
  const products = database.collection('products');
  const orders = database.collection('orders');

  return {
    products,
    orders,
  };
};

module.exports = getDB;
