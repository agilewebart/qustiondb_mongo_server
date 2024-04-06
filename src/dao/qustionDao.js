const dbConn = require('../db_connection/mongo_db_conn');
const resStruc = require('../constants/respStructure');

//------------------ Dao for fetch all qustions  -----------------
module.exports.getAllQustions = async (queryParam) => {
    try {
        let query = queryParam;

        const page = Number(query.page); // 1 , 2
        const limit = Number(query.limit); // 5 , 5
        const skip = (page - 1) * limit; // 0 , 10
        // const skip = (page - 1) * 10; // 0 , 10

        

        let collection = await dbConn.executeQry('qustion_db', 'allqustions');

        const documents = await collection.find().skip(skip).limit(limit).toArray();
        return { documents, page, limit };

    } catch (err) {
        console.log("---dao>> ", err)
        return -500
    }
}





//------------------ Dao for fetch qustion by id -----------------
module.exports.getQustionById = async (body) => {
    try {
        let qustionId = body.qustionId;
        let collection = await dbConn.executeQry('qustion_db', 'allqustions');
        const documents = await collection.findOne({ 'id': qustionId })
        return documents;

    } catch (err) {
        console.log("---dao>> ", err)
        return -500
    }
}



//-------------------- Dao for fetch qustion by qustion type --------------
module.exports.getQustionByQustionType = async (body) => {
    try {
        let qustionType = body.qustionType;
        let collection = await dbConn.executeQry('qustion_db', 'allqustions');
        const documents = await collection.find({
            "question.type": {
                $regex: qustionType,
                $options: "i"
            }
        }).toArray()


        return documents;

    } catch (err) {
        console.log("---dao>> ", err)
        return -500
    }
}


//-------------------- Dao for fetch qustion by qustion type --------------
module.exports.getQustionByQustionInfo = async (body) => {
    try {
        let qustionInfo = body;
        let collection = await dbConn.executeQry('qustion_db', 'allqustions');
        let queryObj = {};


        if (qustionInfo.dateCreated) {
            queryObj["info.dateCreated"] = { $regex: qustionInfo.dateCreated, $options: "i" }
        }
        else if (qustionInfo.difficulty) {
            queryObj["info.difficulty"] = { $regex: qustionInfo.difficulty, $options: "i" }
        }
        else if (qustionInfo.className) {
            queryObj["info.className"] = { $regex: qustionInfo.className, $options: "i" }
        }
        else if (qustionInfo.resource) {
            queryObj["info.resource"] = { $regex: qustionInfo.resource, $options: "i" }
        }
        else {
            queryObj["info.dateCreated"] = { $regex: qustionInfo.dateCreated, $options: "i" }
            queryObj["info.difficulty"] = { $regex: qustionInfo.difficulty, $options: "i" }
            queryObj["info.className"] = { $regex: qustionInfo.className, $options: "i" }
            queryObj["info.resource"] = { $regex: qustionInfo.resource, $options: "i" }

        }

        const documents = await collection.find(queryObj).toArray();

        return documents



    } catch (err) {
        console.log("---dao>> ", err)
        return -500
    }
}


//------------- Dao for fetch qustion by order ---------------
module.exports.getOrderWiseQustions = async (body) => {
    try {
        let qustionOrderArr = body.orderArr;
        let collection = await dbConn.executeQry('qustion_db', 'allqustions');

    } catch (err) {
        console.log("---dao>> ", err)
        return -500
    }
}