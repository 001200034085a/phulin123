const express=require("express");
const mangaRouter=express.Router();


const mangas=[
    {"id":1,"name":"one piece"}
];
// get
mangaRouter.get("/",(req,res)=>{
    res.send(mangas)
});
// post
mangaRouter.post("/",(req,res)=>{
    const newData={
        id:mangas[mangas.length-1].id+1,
        name:req.body.name
    }
    const Json=[...mangas,newData]
    res.send(Json)
});
// delete
mangaRouter.delete("/",(req,res)=>{
    const newData1=[...mangas].filter(item=>{
        return item.id !== req.body.id
    })
    res.send(newData1);
})
// put
mangaRouter.put("/",(req,res)=>{
    const newData2=[...mangas];
    for(let item of mangas){
        if(item.id === req.body.id){
            item.name=req.body.name
        }
    }
    res.send(newData2)
})

module.exports=mangaRouter;
