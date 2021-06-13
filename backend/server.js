import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use('/api/users',userRouter)
app.use('/api/products',productRouter)


app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})


const uri='mongodb+srv://redadmin:redadmin111@steve.zoybp.mongodb.net/Redstore?retryWrites=true&w=majority'

const port = process.env.port || 5000;

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true,useCreateIndex:true})
.then(()=> app.listen(port,()=> console.log(`server connnected at port ${port}`)))
.catch( (error) => console.log(error.message)
);