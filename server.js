const fs = require('fs');
const express = require('express');
const app = express();
const port = 5000;

app.use('/', express.static(__dirname));

app.get('/days', (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        dirs = files.filter(f => f.startsWith('day'))
        res.send(dirs.sort());
    });
})

app.listen(port, () => console.log(`Now listening on port ${port}`))