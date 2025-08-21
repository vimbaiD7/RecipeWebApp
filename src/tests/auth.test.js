const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../utilities/authToken');


jest.mock('jsonwebtoken');

test('authToken validity', () => {
    const req ={
        headers:{authorization:'Bearer thisIsMyValidToken'}
    };

    const res = {
        status: jest.fn(() => res),
        json: jest.fn()
    };
    const next = jest.fn();

    jwt.verify.mockImplementation((token, secret, callback) => {
        callback(null, {id:'1', username:'vimbi', passwprd:'123456789'});
    });

    authenticateToken(req, res, next);

    expect(req.user).toEqual({id:'1', username:'vimbi', passwprd:'123456789'});
    expect(next).toHaveBeenCalled();

});