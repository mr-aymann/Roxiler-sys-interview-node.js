const router=require('express').Router();
const axios=require('axios');





router.get("/:id",async (req,res)=>{
    var userid=req.params['id'];
    var todos = await getTodos(userid);
   
    console.log(todos);
    await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params['id']}`)
    .then((response)=>{
         const data=response.data;
           let obj={
            id:data.id,
            name:data.name,
            username:data.username,
            email:data.email,
            todos:{
                ...todos
            }
        };
        
        
        console.log(obj);
        res.send(obj);
        
    })
    .catch((err)=>{
        console.log(err);
    });
});

 async function  getTodos (userid)  {
    const data = await  axios(`http://localhost:5000/todos/${userid}`)
    console.log(data.data);
    return data.data;
};

function userId(todos) {
    return todos.userId === userid;
}

function includedetails(data){
    return  delete data.id && data.name && data.username && data.email ;
}

module.exports=router;