const axios = require('axios');
const cron = require('node-cron');
const config = require('../config')
const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'githubFile_commit_details.json');


var json_data_from_file;
var parse_json_data;
var extract_Qustion_Arr;
var extract_Config_Arr;
var extract_commitedDate;

//----------------- GitHub Variables -----------------
var github_Contents_Arr
var github_commitedDate


async function data() {

    // reading a file------------------
    try {
        json_data_from_file = await fs.readFile(filePath, { encoding: 'utf8' });
        parse_json_data = JSON.parse(json_data_from_file);

        extract_Qustion_Arr = parse_json_data.qustion_Files_Arr;
        extract_Config_Arr = parse_json_data.config_Files_Arr;
        extract_commitedDate = parse_json_data.last_Commited_Date;




    } catch (err) {
        console.error('Error reading file:', err);
    }

    //Modify the file-------------------

    fetchDataFromGitHub();




    // Writing data to the file
    // try {
    //     await fs.writeFile(filePath, JSON.stringify(parse_json_data), { encoding: 'utf8' });
    //     console.log('Data has been written to the file successfully.');
    // } catch (writeError) {
    //     console.error('An error occurred while writing to the file:', writeError);
    //     return;
    // }
}

data()

// Function to fetch data from GitHub API
async function fetchDataFromGitHub(extract_Qustion_Arr, extract_Config_Arr, extract_commitedDate) {
    try {
        //-----Get last commit details form github 
        // await axios.get(config.GITHUB_APIS.GITHUB_COMMITS)
        //     .then((response) => response)
        //     .then((data) => console.log(data))
        //     .catch((err) => console.log(err));



        //-----Get Contents Files form github 
        await axios.get(config.GITHUB_APIS.GITHUB_CONTENTS)
            .then((response) => response.data)
            .then((data) => github_Contents_Arr = data)
            .catch((err) => console.log(err));

        console.log()
        github_Contents_Arr.forEach((ele) => {
            console.log(ele.name)
        })



    } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        throw error;
    }
}






