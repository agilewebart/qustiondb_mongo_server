// function isJsonString(str) {
//     console.log(str)
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }

const qustionsByorderReq = (reqBody) => {
    let errorCounter = 0;

    let missingParam = [];

    if (Object.keys(reqBody).length === 0) {
        console.log("---- Json length zero-----");
        return false;

    }
    // else if (isJsonString(reqBody) == false) {
    //     console.log("---- Invalid Json -----");
    //     return false
    // }
    else {

        if(reqBody.topicArr == undefined ||  reqBody.topicArr == null){
            missingParam.push("topicArr");
            errorCounter++;
        }

    }

    console.log("Missing Param--> ", missingParam)

    return errorCounter == 0 ? true : false;
}

module.exports = {
    qustionsByorderReq: qustionsByorderReq
}