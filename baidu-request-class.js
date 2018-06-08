const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

module.exports = class BaiduRequest {
    constructor(_requestBody,_serviceName,_serviceMethod){
        this.postData = {};
        this.postData.body = _requestBody;
        this.postData.header = {
            'username': credentials.username,
            'password': credentials.password,
            'token': credentials.token
        };
        this.options = {};
        this.options = {
            'method': 'POST',
            'hostname': 'api.baidu.com',
            'path': '/json/sms/service/'+_serviceName+'/'+_serviceMethod
        };
        this.options.headers = {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(this.postData))
        };
    }
};