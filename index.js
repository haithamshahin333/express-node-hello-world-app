const express = require('express')
const app = express();

const MESSAGE = "Hello World";
const PORT = 8080;

app.get('/', (req,res) => {
    res.send(MESSAGE);
});

app.listen(PORT, () => {
    console.log('Server started on port 8080...');
});
