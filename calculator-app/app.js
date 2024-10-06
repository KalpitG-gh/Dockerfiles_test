const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const sum = parseFloat(a) + parseFloat(b);
    res.send(`The sum is: ${sum}`);
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const difference = parseFloat(a) - parseFloat(b);
    res.send(`The difference is: ${difference}`);
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});
