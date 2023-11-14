const WebSocket = require('ws');
const http = require('http');
const axios = require('axios');
const { response } = require('express');
//const { WebSocketServer } = require('ws')
const server = http.createServer();
const sockserver = new WebSocketServer({ server, path: '/plus-two' });

sockserver.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Inside plus-two API');
        const data = JSON.parse(message);
        const result = data.number * 2;
        
        axios.post('http://localhost:3000/plus-one', { number: result })
            .then((response) => {
                ws.send(JSON.stringify(result));
            })
            .catch((error) => {
                console.error('Error while making the POST request:', error);
            });
    });
});

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
    });