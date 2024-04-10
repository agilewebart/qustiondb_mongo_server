const express = require('express');
const router = express.Router();
const qustionModel = require('../model/qustionModel');
const utils = require('../utils/dataLog')
const req_validators = require('../req_validators/reqValidator');
const constants = require('../constants/statusCode');

//--------------- Get all qustions ---------------
router.get('/v1/getallqustions', async (req, res) => {
    try {
        let queryParam = req.query;

        let resP = await qustionModel.get_All_Qustions(queryParam);


        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })

    }
    catch (err) {
        utils.loggs("========controller=>> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})





//-------------- Get Qustion by id ---------------
router.post('/v1/getqustionbyid', async (req, res) => {
    try {
        let body = req.body;

        let resP = await qustionModel.get_Qustion_by_id(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })

    }
    catch (err) {
        utils.loggs("========controller=>> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})




//-------------- Search  qustion by type ---------------
router.post('/v1/getqustionbytype', async (req, res) => {
    try {
        let body = req.body;

        let resP = await qustionModel.get_Qustion_by_qustionType(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })

    }
    catch (err) {
        utils.loggs("========controller=>> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})




//-------------- Search  qustion by info ---------------
router.post('/v1/getqustionbyinfo', async (req, res) => {
    try {
        let body = req.body;
        // console.log("----+++++++_body ",body)
        let resP = await qustionModel.get_Qustion_by_qustionInfo(body);

        if (resP.bkendFlag == 1) {
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })
        }
        return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })

    }
    catch (err) {
        utils.loggs("========controller=>> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})



//------------ get Order wise qustions ----------------> 
/** req arr
        {
            
            "topicArr":["000700002","000900001","000700005","0007000010","000700001"]
        }
 */
router.post('/v1/gettopicwisequstion', async (req, res) => {
    try {
        let body = req.body;
        // console.log("----+++++++_body ",body)

        if (req_validators.qustionsByorderReq(body) == false) {
            return res.status(200).json({ success: false, status: constants.statusCode.parameterMissing, message: "parameter missing" })
        } else {
            let resP = await qustionModel.get_order_wise_qustions(body);

            if (resP.bkendFlag == 1) {
                return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })
            }
            return res.status(resP.fendStuct.status).json({ success: resP.fendStuct.success, status: resP.fendStuct.status, message: resP.fendStuct.message, response: resP.fendStuct.response })
        }

    }
    catch (err) {
        utils.loggs("========controller=>> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})





module.exports = router;
