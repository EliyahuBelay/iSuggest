//----------------------------------
require('dotenv').config();
//----------------------------------


//----------------------------------
const express = require('express');
//----------------------------------


//---------connecting the database-------------------
require('./DB/index')
//----------------connecting the database------------


const app = express();


//-------------------------------------
//*use* function defined that the server will be able to read json type
app.use(express.json());
//---------------------------------------


//----------------------------------
app.listen(process.env.PORT || 7000);
//----------------------------------

app.get('/',(request,response)=>{
    response.send("server online");
})