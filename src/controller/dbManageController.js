const express = require('express');
const router = express.Router();
const mDb = require('../db_connection/mongo_db_conn')

router.post('/createNewCollection', async (req, res) => {
    try {
        let body = req.body;
        const resP = await mDb.create_Collection(body.db_name, body.collection_name);
        if (resP) {
            return res.status(200).json({ success: true, status: 200, response: [], message: "Collection create successfully" })
        }
        return res.status(400).json({ success: true, status: 400, message: "Some error occur" })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})



router.post('/deleteCollection', async (req, res) => {
    try {
        let body = req.body;
        const resP = await mDb.delete_Collection(body.db_name, body.collection_name);
        if (resP) {
            return res.status(200).json({ success: 'ok' })
        }
        return res.status(400).json({ success: 'error delete 1' })

    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: 'error delete 2' })
    }
})


router.post('/createNewDatabase', async (req, res) => {
    try {

    } catch (err) {

    }
})



router.post('/deleteDatabase', async (req, res) => {
    try {

    } catch (err) {

    }
})




module.exports = router;
