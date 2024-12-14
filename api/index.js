

const jokes=[
    {
        id:1,
        name:'joke1'
    },
    {
        id:2,
        name:'joke2'
    },
    {
        id:3,
        name:'joke3'
    },
    {
        id:4,
        name:'joke4'
    },
    {
        id:5,
        name:'joke5'
    },
    {
        id:6,
        name:'joke6'
    }
]

import express from "express"
const app=express();


app.get('/jokes',(req,res)=>{
    res.json(jokes)
})
app.post('/new-jokes',(req,res)=>{
    const {id,name} = req.body;
    res.json(jokes)
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})