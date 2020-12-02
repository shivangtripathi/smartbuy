import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/product-routes.js';
const app = express()

dotenv.config();
connectDB();

const PORT  = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Api running....')
})
app.use('/api/products',productRoutes)



app.listen(PORT,console.log(`Server running at port ${PORT}`.yellow.underline.bold));