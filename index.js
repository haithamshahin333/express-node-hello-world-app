const express = require('express')
const app = express();

const MESSAGE = "Hello World from App Services Demo";
const PORT = 8080;

app.get('/', (req,res) => {
    res.send(MESSAGE);
});

app.listen(PORT, () => {
    console.log('Server started on port 8080...');
});
