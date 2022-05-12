//------------module that loads environment variables from a .env file into process.env----------------------
require('dotenv').config();
//----------------------------------


//----------------------------------
const express = require('express');
//----------------------------------


//-------------allowing the web page to be requested from another domain outside the domain from which the first resource was served---------------------
const cors = require('cors');
//----------------------------------


//---------------------------------------------
const path = require('path');
//---------------------------------------------




//---------connecting the database-------------------
require('./DB/index')
//----------------connecting the database------------


const app = express();


//-----------------------------
app.use(cors());
//-----------------------------


//-------------------------------------
//*use* function defined that the server will be able to read json type
app.use(express.json());
//---------------------------------------


//----------------------------------
app.listen(process.env.PORT || 7000);
//----------------------------------



//---------------------------------need to learn more about this------------------------------------------
if (process.env.NODE_ENV === 'producton'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
    })
}
//---------------------------------------------------------------------------
