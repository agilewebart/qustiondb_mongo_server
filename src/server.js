const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const PORT = config.BACKEND_HOST.PORT || 9000;
const collectionModify = require('./controller/dbManageController');
const qustionInfo = require('./controller/qustionController');

const qustionModifier = require('../src/middleware/onlyQustion')




app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api/v1',collectionModify)
app.use('/api/v1', qustionModifier.onlyQustions, qustionInfo)
// app.use('/api/v1', qustionInfo)






app.listen(PORT, () => {
    console.log(config.BACKEND_HOST.IP_HOST)
})