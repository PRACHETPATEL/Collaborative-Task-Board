const express=require('express');
const path=require("path");
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
const logger=require('morgan');
const app=express();
const PORT=process.env.PORT;
app.set('view engine','ejs');
app.use(logger('tiny'));
app.use(express.static(path.join(__dirname,"./public")));

app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`App started on port:${PORT}`);
})
