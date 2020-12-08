const express = require('express');
const app = express();
const Datastore = require('nedb');
const { any } = require('underscore');

const database = new Datastore('database.db');
database.loadDatabase();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (request, response) => {
    console.log('I got a request');
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json({
        status: 'success',
        timestamp: timestamp,
        request: data
    });
});
