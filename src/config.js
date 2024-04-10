var path = require('path');
require('dotenv').config()

const BASEPATH = path.resolve(__dirname, '..');
const controllerPath = BASEPATH + '/src/controller/';

//+++++++++++++++++++++++++++++++++++++++++====SERVER AND DB CONFIGS===++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------- DATA_BASE_CONFIG LOCAL FOR MYSQL ----------------
const DB_CONFIG = {
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
const DB_CONFIG_MONGO = {
    MONGO_URL_LOCAL: `${process.env.MONGODB_URL_LOCAL}`,
    MONGO_DB_NAME: `${process.env.MONGODB_DB_NAME}`,
    MONGO_URL_ATLAS: `${process.env.MONGODB_URL_ATLAS}`,
    // MONGODB_DB_COLLECTION : `${process.env.MONGODB_DB_COLLECTION}`
}



//----------- SERVER CONFIG LOCAL-----------------
const BACKEND_HOST = {
    "IP_HOST": `${process.env.BKEND_HOST_NO_SSL_LOCAL}://${process.env.BKEND_IP_LOCAL}:${process.env.BKEND_PORT_LOCAL}`,
    "IP_HOST_SSL": `${process.env.BKEND_HOST_SSL_LOCAL}://${process.env.BKEND_IP_LOCAL}:${process.env.BKEND_PORT_LOCAL}`,
    "HOST_SSL": `${process.env.BKEND_HOST_SSL_LOCAL}`,
    "HOST_NO_SSL": process.env.BKEND_HOST_NO_SSL_LOCAL,
    "PORT": process.env.BKEND_PORT_LOCAL,
    "IP": `${process.env.BKEND_IP_LOCAL}`,
}


//----------- GIT HUB API CONFIG --------------
const GITHUB_APIS = {
    'GITHUB_CONTENTS': `${process.env.GITHUB_URL_CONTENTS}`,
    'GITHUB_COMMITS': `${process.env.GITHUB_URL_CONMMITS}`,
    'GITHUB_TARGET_FILE': (qustionId, qustionType) => {
        return `${process.env.GITHUB_URL_FILE}+${qustionId}-${qustionType}.json`
    }
}
//+++++++++++++++++++++++++++++++++++++++++====SERVER AND DB CONFIGS===++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = {
    controllerPath: controllerPath,
    DB_CONFIG: DB_CONFIG,
    DB_CONFIG_MONGO: DB_CONFIG_MONGO,
    BACKEND_HOST: BACKEND_HOST,
    GITHUB_APIS: GITHUB_APIS,
}