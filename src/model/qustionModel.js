
const qustionDao = require('../dao/qustionDao');
const respStruc = require('../constants/respStructure')
const utils = require('../utils/dataLog')

//============= Modal of get all qustions ====== 
module.exports.get_All_Qustions = async (queryParam) => {
    try {

        let query = queryParam;
        if (query.view && query.page && query.limit && query.limit > 0 && query.page > 0) {

            let result = await qustionDao.getAllQustions(query);


            if (result == null || result.length == 0) {
                return respStruc.responseStruct(1, true, 200, 'No data found', []);
            }
            else if (result == -500) {
                return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
            }
            else {
                return respStruc.responseStruct_lim_off(1, true, 200, 'Data fetch successfully', result.page, result.limit, result.documents);
            }
        }

        else {
            return respStruc.responseStruct(1, false, 400, 'Bad request', false)
        }

    } catch (err) {
        return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
    }
}


//============= Modal of get qustion by id ====== 
module.exports.get_Qustion_by_id = async (body) => {
    try {

        let reqBody = body;
        if (reqBody.qustionId == null || reqBody.qustionId == undefined || reqBody.qustionId == '') {
            return respStruc.responseStruct(1, false, 400, 'Bad request', false)
        }

        let result = await qustionDao.getQustionById(reqBody);
        if (result == null) {
            return respStruc.responseStruct(1, true, 200, 'No data found', []);
        }
        else if (result == -500) {
            return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
        }
        else {
            return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', [result]);
        }

    } catch (err) {
        utils.loggs("---modal>> ", err)
        return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
    }
}


//============ Modal of get qustion by type =========
module.exports.get_Qustion_by_qustionType = async (body) => {
    try {

        let reqBody = body;
        if (reqBody.qustionType == null || reqBody.qustionType == undefined || reqBody.qustionType == '') {
            return respStruc.responseStruct(1, false, 400, 'Bad request', false)
        }

        let result = await qustionDao.getQustionByQustionType(reqBody);

        if (result == null || result.length == 0) {
            return respStruc.responseStruct(1, true, 200, 'No data found', result);
        }
        else if (result == -500) {
            return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
        }
        else {
            return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', result);
        }

    } catch (err) {
        utils.loggs("---modal>> ", err)
        return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
    }
}

//============ Modal of get qustion by info =========
module.exports.get_Qustion_by_qustionInfo = async (body) => {
    try {

        let reqBody = body;
        if (reqBody.dateCreated || reqBody.difficulty || reqBody.className || reqBody.resource) {

            let result = await qustionDao.getQustionByQustionInfo(reqBody);

            if (result == null || result.length == 0) {

                return respStruc.responseStruct(1, true, 200, 'No data found', result);
            }
            else if (result == -500) {
                return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
            }
            else {
                return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', result);

                // if (reqBody.purposeType == 'exam') {
                //     let storeResult = result;
                //     let modifiedResult = [];

                //     //-------- Sending qustion against purpose ----------------
                //     storeResult.forEach((parentArr) => {
                //         parentArr.question.map((onlyQus) => {
                //             modifiedResult.push({ qustion: onlyQus.context })
                //         })
                //     })

                //     return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', modifiedResult);


                // }
                // else {
                //     return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', result);
                // }
            }
        }

        else {

            return respStruc.responseStruct(1, false, 400, 'Bad request', false)
        }

    } catch (err) {
        utils.loggs("---modal>> ", err)
        return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
    }
}



//============= Model for get order wise qustion =========================
module.exports.get_order_wise_qustions = async (body) => {
    try {

        let reqBody = body;
        let result = await qustionDao.getOrderWiseQustions(reqBody);



        if (result == null || result.length == 0) {
            return respStruc.responseStruct(1, true, 200, 'No data found', result);
        }
        else if (result == -500) {
            return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
        }
        else {
            return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', result);
        }


    } catch (err) {
        utils.loggs("---modal>> ", err)
        return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
    }
}