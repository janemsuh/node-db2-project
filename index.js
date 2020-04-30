const express = require('express');
const server = express();
const port = 5000;

const carsRouter = require('./router/cars-router');

server.use(express.json());

server.get('/', (req, res) => {
    res.json({
        message: 'The cars API is alive!'
    });
});

server.use('/cars', carsRouter);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});