import WebSocket, { WebSocketServer } from 'ws';

var ws = new WebSocket("wss://net.carmel.dev:443");

ws.on('open', function open() {
    ws.send('something');
  });
  
ws.on('message', function message(data) {
    console.log('received: %s', data);
});