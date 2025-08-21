const User = require('../models/user');

test('Verify that req body is an instance of User', () => {
  const req = {
    body: new User('1', 'vimbai', 'example@hotmail.com'),
  };

  expect(req.body).toBeInstanceOf(User);
});

