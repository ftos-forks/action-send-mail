#!/usr/bin/env node

const http = require("@actions/http-client");
const fs = require("fs");
const assert = require('assert');
const child_process = require('child_process');

async function fetchLatestMessage() {
    try {
        const client = new http.HttpClient()
        const response = await client.getJson("http://localalhost:2525/api/Messages");

        if (response.statusCode === 200) {
            console.log('JSON data:', response.result);
        } else {
            console.error(`Request failed with status ${response.statusCode}`);
        }
    } catch (error) {
        console.error('Request error:', error);
    }
}


//try {
//    const output = child_process.execSync('./main.js', { encoding: 'utf-8' });
//} catch (error) {
//    console.error(error);
//}

function readFileOrNot(text) {
    if (text && text.startsWith("file://")) {
        return fs.readFileSync(text.replace("file://", ""), "utf8");
    }
    return text;
}
