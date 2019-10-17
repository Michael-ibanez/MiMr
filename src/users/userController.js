 const userService = require('./userService');
 const MongoClient = require('mongodb').MongoClient;

  // Connection URL
  const url = 'mongodb://ds123410.mlab.com:23410';

  // Database Name
  const dbName = 'heroku_j4gc7fm9';

export function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

export function register(req, res, next) {
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      client.close();
    });

    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

export function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

export function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

export function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
