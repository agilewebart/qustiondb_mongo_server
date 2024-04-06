const respStruc = require('../constants/respStructure')


//-------- For response modification -------------
function modifiedResponseFn(catchResponse, res) {

    let modifiedResponse = {};

    res.json = function (data) {
        let gettingResponse = data.response;
        let modifiedResultArr = [];

        console.log(gettingResponse);

        gettingResponse.forEach((parentArr, i) => {
            parentArr.question.map((qus, i) => {
                modifiedResultArr.push({ qustion: qus.context })
            })
        })

        modifiedResponse = {
            success: data.success,
            status: data.status,
            message: data.message,
            response: modifiedResultArr
        };

        catchResponse.call(this, modifiedResponse);
    }

}

//-------- For response modification -------------
function modifiedResponseFn_withPagination(catchResponse, res) {

    let modifiedResponse = {};

    res.json = function (data) {
        console.log(data);
        let gettingResponse = data.response.response;
        let modifiedResultArr = [];

        console.log(gettingResponse);

        gettingResponse.forEach((parentArr, i) => {
            parentArr.question.map((qus, i) => {
                modifiedResultArr.push({ qustion: qus.context })
            })
        })

        modifiedResponse = {
            success: data.success,
            status: data.status,
            message: data.message,
            response: {
                response: modifiedResultArr,
                page: data.response.page,
                limit: data.response.limit
            }
        };

        catchResponse.call(this, modifiedResponse);
    }

}

module.exports.onlyQustions = async (req, res, next) => {
    try {
        const reqBody = req.body;
        let catchResponse = res.json;

        const reqQuery = req.query;

        if (reqBody.purposeType == "exam") {
            modifiedResponseFn(catchResponse, res);
            next()
        }
        else if (reqQuery.purposeType == 'exam') {
            modifiedResponseFn_withPagination(catchResponse, res);
            next()
        }
        else {
            next()
        }



    } catch (err) {
        console.log("---middleWare--->> ", err)
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
}