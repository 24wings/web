import * as express from 'express';
import * as bodyPaser from 'body-parser';
import * as methodOverride from 'method-override';
import *  as request from 'request';

var app = express();


app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

