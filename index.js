const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://ahzhe900:Fuckyou69420@cluster0.w4psvcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection


    let result = await client.db('sample_mflix').collection('info').find(
        { name: 'Waddup'}
    ).toArray()

   // updateOne(
     // {_id: new ObjectId('6605103d2d035a66e70704ee')},
     // { $set: 
       // { age: '21',
        //  status: 'A'
        //}
      //}
    //)

    //insertOne({
      //name: 'Waddup',
      //age: '22',
      //status: 'single',
      //faculty: 'FTKEK',
    //})

    //.find(
      //{ name: 'Waddup'}
  //).toArray()

    // .find().toArray() is find
    // .insertOne is insert
    // .updateOne is update
    // .deleteOne is delete

    console.log(result)
    //console.log is a log for showing that ive successfully insered the 'result' into the database


    //await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);
