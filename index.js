const express = require('express');
const app = express();

// Routes
const userApi = require('./routes/user');

// Middlewares for error
const { wrapErrors, errorHandler } = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFoundHandler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Endpoints
userApi(app);

// Error handlers
app.use(notFoundHandler);
app.use(wrapErrors);
app.use(errorHandler);

const server = app.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
})
