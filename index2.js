const express=require("express");
const app=express();
const port=5000;
const mangaRouter=require("./MangaRouter");
const usersRouter=require("./UsersRouter");

app.use(express.json());
app.use("/api/manga",mangaRouter);
app.use("/api/users",usersRouter); 

app.listen(port,()=>{
    console.log("sever running http://localhost.5000")
});
