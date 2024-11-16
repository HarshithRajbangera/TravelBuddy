import bodyParser from "body-parser";
import express from "express";
import axios from "axios";
import path, { dirname } from "path";
import {fileURLToPath} from "url";

const app =express();
const port=3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs'); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname+"/index.html"));
})

app.get("/login",(req,res)=>{
  res.sendFile(path.join(__dirname+"/login.html"));
})

app.get("/signin",(req,res)=>{
  res.sendFile(path.join(__dirname+"/signin.html"))
})
app.get('/blog', (req, res) => {

    console.log("rendering");
    res.render('blog'); // Render blog.ejs from the views folder
  });

app.listen(port,(req,res)=>{
    console.log(`listening at port no ${port}`);
})