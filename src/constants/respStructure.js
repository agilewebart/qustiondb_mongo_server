module.exports.responseStruct = (bkndFlg = 1, success = false, status = 200, message, response = null) => {
    return {
        bkendFlag: bkndFlg,
        fendStuct: {
            success: success,
            status: status,
            message: message,
            response: response
        }
    }
}