# Pintortico Backend

This project contains the backend services to provide content and extra functionality to Max Rojas' website.

## Technology

Frame is built with the [hapi](https://hapijs.com/) framework.

## Requirements

You need [Node.js](http://nodejs.org/download/) `>=8.x` and you'll need a
[MongoDB](http://www.mongodb.org/downloads) `>=2.6` server running.


## Installation

```bash
$ git clone git@github.com:rojasmi1/pintortico-backend.git
$ cd pintortico-backend
$ npm install
```


## Configuration

Simply edit `config.js`. The configuration uses
[`confidence`](https://github.com/hapijs/confidence) which makes it easy to
manage configuration settings across environments. __Don't store secrets in
this file or commit them to your repository.__

__Instead, access secrets via environment variables.__ We use
[`dotenv`](https://github.com/motdotla/dotenv) to help make setting local
environment variables easy (not to be used in production).

__Don't commit `.env` to your repository.__


## Running the app

```bash
$ npm start

# > frame@0.0.0 start /home/jedireza/projects/frame
# > ./node_modules/nodemon/bin/nodemon.js -e js,md server

# 09 Sep 03:47:15 - [nodemon] v1.10.2
# ...
```

Now you should be able to point your browser to http://127.0.0.1:9000/ and
see the welcome message.

[`nodemon`](https://github.com/remy/nodemon) watches for changes in server
code and restarts the app automatically.

### With the debugger

```bash
$ npm run inspect

# > pintortico-backend@0.0.0 inspect /home/mrojas/workspace/pintortico-backend
# > nodemon --inspect -e js,md server.js

# [nodemon] 1.14.12
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching: *.*
# [nodemon] starting `node --inspect server.js`
# Debugger listening on ws://127.0.0.1:9229/3d706d9a-b3e0-4fc6-b64e-e7968b7f94d0
# For help see https://nodejs.org/en/docs/inspector
# 180203/193534.071, [log,info,mongodb] data: HapiMongoModels: successfully connected to the db.
# 180203/193534.127, [log,info,mongodb] data: HapiMongoModels: finished processing auto indexes.
# Server started on port 9000
```

Once started with the debuger you can open Google Chrome and go to
[chrome://inspect](chrome://inspect). See https://nodejs.org/en/docs/inspector/
for more details.


## Running in production

```bash
$ node server.js
```

Unlike `$ npm start` this doesn't watch for file changes. Also be sure to set
these environment variables in your production environment:

 - `NODE_ENV=production` - This is important for many different
   optimizations.
 - `NPM_CONFIG_PRODUCTION=false` - This tells `$ npm install` to not skip
   installing `devDependencies`, which we may need to run the first time
   setup script.


## License

MIT
