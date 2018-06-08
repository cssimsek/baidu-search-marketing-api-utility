const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

module.exports = {
    doHttpPost: function (options, postData,fileName) {
        const req = http.request(options, function (res) {
            console.log('Options:\n' + JSON.stringify(options));
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                fs.appendFile(fileName, chunk, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('The "data to append" was appended to the target file!');
                });
            });
            res.on('end', function () {
                console.log('No more data in response.');
            });
        });

        req.on('error', (e) => {
            console.error('problem with request: ' + JSON.stringify(e));
        });
        console.log(JSON.stringify(postData));
        // write data to request body
        req.write(JSON.stringify(postData));
        req.end();
    }
};