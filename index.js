import express from "express";
import axios from "axios";
import bodyParser, { urlencoded } from "body-parser";

const app=express();
const port=4000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port,(req,res)=>{
    app.listen(`listening at port no ${port}`);
})