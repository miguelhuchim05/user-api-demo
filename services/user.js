const boom = require('@hapi/boom');

class UserService {
    constructor() {
        this.users = [];
        this.id = 1;
    }

    async getUsers() {
        return this.users;
    }

    async getUsersById(id) {
        return this.users.find((user) => user.id === +id);
    }

    async createUser(newUser) {
        newUser.id = this.id++;
        this.users.push(newUser);

        return this.users[this.users.length - 1];
    }

    async updateUser(userChanges, id) {
        const userPosition = this.users.findIndex((user) => user.id === +id);

        if (userPosition === -1) { throw boom.badRequest('User not found'); }

        this.users[userPosition] = userChanges;
    }

    async deleteUser(id) {
        this.users = this.users.filter((user) => user.id !== +id)
    }
}

module.exports = UserService;
