const express=require('express');
const router=express.Router();
const axios=require('axios');
const { info } = require('console');



function delUserId(todos) {
    return delete todos.userId;
}


router.get('/',async(req,res)=>{
    await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
        const data=response.data;
        //console.log(response.data.filter(delUserId));
        console.log(data.filter(delUserId));
        res.send(data.filter(delUserId));
    })
    .catch((err)=>{
        console.log(err);
    });
    
});

router.get("/:id",async (req,res)=>{
    const id=req.params['id'];
    await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
        const data=response.data.filter(info=>info.userId==parseInt(id));
        res.send(data.filter(delUserId));
    })
    .catch((err)=>{
        console.log(err);
    });

});

module.exports=router;