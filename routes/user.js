const express = require('express');
const UserService = require('../services/user');

function userApi(app) {
    const router = express.Router();
    app.use('/api/user', router);

    const userService = new UserService();

    router.get(
        '/',
        async function (req, res, next) {
            try {
                const users = await userService.getUsers();

                res.status(200).json({
                    data: users
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.get(
        '/:id',
        async function (req, res, next) {
            try {
                const { id } = req.params;
                const users = await userService.getUsersById(id);

                res.status(200).json({
                    data: users
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.post(
        '/',
        async function (req, res, next) {
            try {
                const userPayload = req.body;
                const user = await userService.createUser(userPayload);

                res.status(201).json({
                    message: 'User created',
                    data: user
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.put(
        '/:id',
        async function (req, res, next) {
            try {
                const { id } = req.params;
                const userPayload = req.body;
                const user = await userService.updateUser(userPayload, id);

                res.status(200).json({
                    message: 'User updated',
                    data: user
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.delete(
        '/:id',
        async function (req, res, next) {
            try {
                const { id } = req.params;
                await userService.deleteUser(id);

                res.sendStatus(204);
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = userApi;

