const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();
client.set('visits', 1);

app.get('/', (req, res)=>{
    client.get('visits', (err, visits)=> {
        res.send('Visits: ', + visits);
        client.set('visits', parseInt(visits + 1));
    })
    res.send('Hello there')
});


app.listen(8080, ()=>{
    console.log('Listening on port 8080...');
});