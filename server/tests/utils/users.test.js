const expect = require('expect');

let {Users} = require('./../../utils/users');

describe('Users', () => {
    let users = [];

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Messi',
            room: 'FC Barcelona'
        }, {
            id: '2',
            name: 'Dybala',
            room: 'Juventus'
        }, {
            id: '3',
            name: 'Iniesta',
            room: 'FC Barcelona'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'JoeDoe',
            room: 'Developers'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let userId = '55';
        let user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '55';
        let user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for FC Barcelona room', () => {
        let userList = users.getUserList('FC Barcelona');
        expect(userList).toEqual(['Messi', 'Iniesta']);
    });

    it('should return names for Juventus room', () => {
        let userList = users.getUserList('Juventus');
        expect(userList).toEqual(['Dybala']);
    });
});