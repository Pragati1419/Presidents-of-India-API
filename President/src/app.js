const express = require('express');
const router=new express.Router();
require("../src/db/conn");

const PresidentRanking = require("../src/models/index");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

//handling POST request
app.post("/index" , async (req, res) => {
    try{

       const addingPresidentRecords =  new PresidentRanking(req.body);
        console.log(req.body);
      const insertPresident= await  addingPresidentRecords.save();
        res.send(insertPresident);
    }catch(err){
        res.status(400).send(err);

    }

})


//handling get request

app.get("/index", async (req, res) => {
    try{
      const getPresident = await PresidentRanking.find({});


        res.status(201).send(getPresident);


    }catch(err){

        res.status(400).send(err);
    }
})


app.listen(port , () =>{
    console.log(`Connection is live at port no. ${port}`);
})