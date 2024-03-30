
const qustionDao = require('../dao/qustionDao');
const respStruc = require('../constants/respStructure')

//============= Modal of get all qustions ====== 
module.exports.get_All_Qustion = async (body) => {
    try {

        let reqBody = body;
        if (reqBody.getAll == 'list' && reqBody.limit && reqBody.offset) {

            let result = await qustionDao.getQustionById(reqBody);
            
            if (result == null || result.length == 0) {
                return respStruc.responseStruct(1, true, 200, 'No data found', result);
            }
            else if (result == -500) {
                return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
            }
            else {
                return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', [result]);
            }
        }

        else {
            return respStruc.responseStruct(1, false, 400, 'Bad request', false)
        }

    } catch (err) {
        console.log("---modal>> ", err)
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
        console.log("---modal>> ", err)
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
            return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', [result]);
        }

    } catch (err) {
        console.log("---modal>> ", err)
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
                return respStruc.responseStruct(1, true, 200, 'Data fetch successfully', [result]);
            }
        }

        else {
            return respStruc.responseStruct(1, false, 400, 'Bad request', false)
        }

    } catch (err) {
        console.log("---modal>> ", err)
        return respStruc.responseStruct(0, false, 500, 'Internal server error', false);
    }
}