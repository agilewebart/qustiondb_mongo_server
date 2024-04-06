const express = require('express');
const router = express.Router();
const qustionModel = require('../model/qustionModel');





//--------------- Get all qustions ---------------
router.get('/getallqustions', async (req, res) => {
    try {
        let queryParam = req.query;
        
        let resP = await qustionModel.get_All_Qustions(queryParam);


        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })

    }
    catch (err) {
        console.log("========controller=>> ",err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})





//-------------- Get Qustion by id ---------------
router.post('/getqustionbyid', async (req, res) => {
    try {
        let body = req.body;

        let resP = await qustionModel.get_Qustion_by_id(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })

    }
    catch (err) {
        console.log("========controller=>> ",err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})




//-------------- Search  qustion by type ---------------
router.post('/getqustionbytype', async (req,res) => {
    try {
        let body = req.body;

        let resP = await qustionModel.get_Qustion_by_qustionType(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })

    }
    catch (err) {
        console.log("========controller=>> ",err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})




//-------------- Search  qustion by info ---------------
router.post('/getqustionbyinfo', async (req,res) => {
    try {
        let body = req.body;
        // console.log("----+++++++_body ",body)
        let resP = await qustionModel.get_Qustion_by_qustionInfo(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })

    }
    catch (err) {
        console.log("========controller=>> ",err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})



//------------ get Order wise qustions ----------------
router.post('/getorderwisequs', async (req,res) => {
    try {
        let body = req.body;
        // console.log("----+++++++_body ",body)
        let resP = await qustionModel.get_order_wise_qustions(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response:resP.fendStuct.response })

    }
    catch (err) {
        console.log("========controller=>> ",err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})





module.exports = router;
