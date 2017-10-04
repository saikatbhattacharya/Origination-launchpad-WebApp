const express = require('express');
const app = express();
const { exec } = require('child_process');

app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        //intercepts OPTIONS method
        if ('OPTIONS' === req.method) {
            //respond with 200
            res.sendStatus(200);
        }
        else {
            //move on
            next();
        }
});

app.get('/test', function (req, res) {
    console.log('****** Hello!!!!', process.env.USERNAME);
  exec('start notepad', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
  res.sendStatus(200);
});

app.listen(4001, function () {
  console.log('Example app listening on port 4001!')
});
