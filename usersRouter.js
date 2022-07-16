const express=require("express");
const joi=require("joi");
const usersRouter=express.Router();


const users=[
    {"id":1,"name":"đặng phú","phoneNumber":"0234456789","email":"xcdj@gmail.com","gender":"nam","age":22}
];
// get
usersRouter.get("/",(req,res)=>{
    res.send(users)
});
// post
usersRouter.post("/",(req,res)=>{
    const {error}=validateUsers(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
    }
    else{
        const newData={
             id:users[users.length-1].id+1,
             name:req.body.name,
             age:req.body.age,
             phoneNumber:req.body.phoneNumber,
             email:req.body.email,
             gender:req.body.gender
        }
       users.push(newData);
       res.send(users);
    }
    
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
    const {error}=validateUsers(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
    }
    else{
        const newData2=[...users];
    for(let item of users){
        if(item.id === req.body.id){
            item.name=req.body.name,
            item.age=req.body.age,
            item.phoneNumber=req.body.phoneNumber,
            item.email=req.body.email,
            item.gender=req.body.gender
        }
        }
    res.send(newData2)
    }
        
});
// validate joi
const validateUsers=(users)=>{
    const schema=joi.object({
        id:joi.number(),

        name:joi.string()
        .regex(/[A-Za-z]$/)
        .min(5)
        .required(),

        email:joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net',"tk","js"] } }),

        phoneNumber:joi.string()
        .pattern(new RegExp('^[0-9]{10,12}$')),
        
        age:joi.number()
        .integer()
        .min(1)
        .max(200),
        
        gender:joi.string()
        .regex(/nam$|nữ$|khác$/)
        
        
    });
    return schema.validate(users);
}

module.exports=usersRouter;
