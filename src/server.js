const express = require('express');
const config = require('./config');
const fs     =	require('fs');
const util = require('./utils/dataLog')
const app = express();
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean')
// const xss = require('xss');
const PORT = config.BACKEND_HOST.PORT || 9000;


// const collectionModify = require('./controller/dbManageController');
// const qustionInfo = require('./controller/qustionController');
const middleWare = require('../src/middleware/onlyQustion')




app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
//----------- Use for mongo sanitize -----------------
app.use(mongoSanitize())
//-----------Prevent  Xss ----------------
app.use(xssClean());
 
app.use(middleWare.onlyQustions)

fs.readdir(config.controllerPath, (err, files) => {
    if(err){
        util.loggs("---Filereader error-->",err)
    } else {
        files.forEach(file => {
            app.use('/api' , require(config.controllerPath+file));
        });
    }
});

// app.use('/api/v1',collectionModify)
// app.use('/api/', middleWare.onlyQustions, qustionInfo)
// app.use('/api/v1', qustionInfo)






app.listen(PORT, () => {
    console.log(config.BACKEND_HOST.IP_HOST)
})