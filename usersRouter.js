const express=require("express");
const usersRouter=express.Router();


const users=[
    {"id":1,"name":"đặng phú"}
];
// get
usersRouter.get("/",(req,res)=>{
    res.send(users)
});
// post
usersRouter.post("/",(req,res)=>{
    const newData={
        id:users[users.length-1].id+1,
        name:req.body.name
    }
   const Json=[...users,newData]
    res.send(Json);
});
// delete
usersRouter.delete("/",(req,res)=>{
    const newData1=[...users].filter(item=>{
        return item.id !== req.body.id
    })
    res.send(newData1);
})
// put
usersRouter.put("/",(req,res)=>{
    const newData2=[...users];
    for(let item of users){
        if(item.id === req.body.id){
            item.name=req.body.name
        }
    }
    res.send(newData2)
})

module.exports=usersRouter;
