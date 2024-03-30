const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const PORT = config.BACKEND_HOST.PORT || 9000;
const collectionModify = require('./controller/dbManageController');
const qustionInfo = require('./controller/qustionController');

const mongo_conn = require('./db_connection/mongo_db_conn');
// const users = await mongo_conn.executeQry('allqustions');
// console.log("-----> ",await users.find().toArray())




app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api/v1',collectionModify)
app.use('/api/v1',qustionInfo)





app.listen(PORT, () => {
    console.log(config.BACKEND_HOST.IP_HOST)
})