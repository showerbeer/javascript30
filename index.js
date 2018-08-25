const liveServer = require('live-server');

const params = {
    port: 8080,
    host: 'localhost',
    file: 'index.html',
    cors: true
};

liveServer.start(params);