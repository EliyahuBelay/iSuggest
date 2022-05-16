//------------module that loads environment variables from a .env file into process.env----------------------
require('dotenv').config();
//----------------------------------


//----------------------------------
const express = require('express');
//----------------------------------


//---------connecting the database-------------------
require('./DB/index')
//----------------connecting the database------------


//-------------allowing the web page to be requested from another domain outside the domain from which the first resource was served---------------------
const cors = require('cors');
//----------------------------------


//---------------------------------------------
const path = require('path');
//---------------------------------------------




const app = express();




//-----------------------------
app.use(cors());
//-----------------------------


//-------------------------------------
//*use* function defined that the server will be able to read json type
app.use(express.json());
//---------------------------------------

const PORT = process.env.PORT || 7000

//----------------------------------
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
//----------------------------------



//---------------------------------need to learn more about this------------------------------------------
if (process.env.NODE_ENV === 'producton'){
    app.use(express.static(path.join(__dirname,'/client,build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'/client','build','index.html'))
    })
}
//---------------------------------------------------------------------------
