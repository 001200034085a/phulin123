const express=require("express");
const app=express();
const port=5000;
const mangaRouter=require("./MangaRouter")

app.use(express.json());
app.use("/api/manga",mangaRouter) 

app.listen(port,()=>{
    console.log("sever running http://localhost.5000")
})
