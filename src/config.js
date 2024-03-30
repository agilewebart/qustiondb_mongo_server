require('dotenv').config()

//+++++++++++++++++++++++++++++++++++++++++====LOCAL===++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------- DATA_BASE_CONFIG LOCAL FOR MYSQL ----------------
module.exports.DB_CONFIG = {
    user: process.env.DB_USER_LOCAL,
    host: process.env.DB_HOST_LOCAL,
    database: process.env.DATABASE_NAME_LOCAL,
    password: process.env.DB_PASSWORD_LOCAL,
    port: process.env.DB_PORT_LOCAL,
    // max: 20,
    // idleTimeoutMillis: 1000,
    // connectionTimeoutMillis: 1000,
    // maxUses: 7500,
}











//--------- DATA_BASE_CONFIG LOCAL FOR MONGODB ----------------
module.exports.DB_CONFIG_MONGO = {
    MONGO_URL_LOCAL:`${process.env.MONGODB_URL_LOCAL}`,
    MONGO_DB_NAME : `${process.env.MONGODB_DB_NAME}`,
    MONGO_URL_ATLAS : `${process.env.MONGODB_URL_ATLAS}`,
    // MONGODB_DB_COLLECTION : `${process.env.MONGODB_DB_COLLECTION}`
}



//----------- SERVER CONFIG LOCAL-----------------
module.exports.BACKEND_HOST = {
    "IP_HOST": `${process.env.BKEND_HOST_NO_SSL_LOCAL}://${process.env.BKEND_IP_LOCAL}:${process.env.BKEND_PORT_LOCAL}`,
    "IP_HOST_SSL": `${process.env.BKEND_HOST_SSL_LOCAL}://${process.env.BKEND_IP_LOCAL}:${process.env.BKEND_PORT_LOCAL}`,
    "HOST_SSL": `${process.env.BKEND_HOST_SSL_LOCAL}`,
    "HOST_NO_SSL": process.env.BKEND_HOST_NO_SSL_LOCAL,
    "PORT": process.env.BKEND_PORT_LOCAL,
    "IP": `${process.env.BKEND_IP_LOCAL}`,
}


//----------- GIT HUB API CONFIG --------------
module.exports.GITHUB_APIS = {
    'GITHUB_CONTENTS':`${process.env.GITHUB_URL_CONTENTS}`,
    'GITHUB_COMMITS':`${process.env.GITHUB_URL_CONMMITS}`,
    'GITHUB_TARGET_FILE': (qustionId,qustionType) =>{
        return `${process.env.GITHUB_URL_FILE}+${qustionId}-${qustionType}.json`
    }
}