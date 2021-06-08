const boom = require('@hapi/boom');

function notFoundHandler(req, res) {
    const { output: { statusCode, payload } } = boom.notFound('Path not found');

    res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;
