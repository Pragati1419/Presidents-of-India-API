const express = require("express");
const mongoose = require("mongoose");

const PresidentSchema = new mongoose.Schema({
   ranking:{
    type : Number,
    required: true,
    unique: true
   },

   name:{
    type : String,
    unique:true,

    required: true
    
   },

   From:{
    type : Number ,
    required: true
   },

   To:{
    type : Number ,
    required: true
   },
})


//creating new collections
const PresidentRanking = new mongoose.model("PresidentRanking" ,PresidentSchema )


module.exports = PresidentRanking;