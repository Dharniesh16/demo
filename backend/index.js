const express = require("express")
const app = express()
const port = process.env.PORT || 4040
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello")
})
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://dharandharniesh16:demo123@cluster0.wshlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const watchstore=client.db("watch").collection("sample1");
    app.post("/upload",async(req,res)=>{
      const data =req.body;
      const result=await watchstore.insertOne(data)
      res.send(result);
    })
    app.get ("/store" ,async(req,res)=>{
      const store=watchstore.find();
      const result = await store.toArray();
      res.send(result);
    })

    app.get("stored/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result =await watchstore.findOne(filter);
      res.send(result);
    })

    app.patch("/allproducts/:id",async(req,res)=>{
      const id=req.params.id;
      const updateWatchstore=req.body;
      const filter={_id:new ObjectId(id)};
      const updateDoc={
        $set:{
          ...updateWatchstore
        },
      }
      const options = {upsert:true};
      const result=await watchstore.updateOne(filter,updateDoc,options);
      res.send(result);

    })

    app.delete("/watch/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await watchstore.deleteOne(filter);
      res.status(200).json({success:true,message:"data deleted successfully",result});
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log(`connected to ${port}`)
})
