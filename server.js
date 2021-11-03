const express = require('express');
const dotenv = require('dotenv');
const app = express()
const port = 5100

// connecting .env file 
dotenv.config({
    path: './config/config.env'
});
// connecting the DB
const connectDB = require('./config/db');
connectDB();
// using json 
app.use(express.json({}));
app.use(express.json({extended:true}));


app.get('/', (req,res)=>{
    res.json({
        msg: "Welcome to NewsMania, powered by TechCurators"
    })
})


app.use('/news', require('./routes/news'));

app.listen(port, () => {
    console.log(`App Listening at http://localhost:${port}`)
});