# Frame

A user system API starter. Bring your own front-end.

[![Build Status](https://travis-ci.org/jedireza/frame.svg?branch=master)](https://travis-ci.org/jedireza/frame)
[![Dependency Status](https://david-dm.org/jedireza/frame.svg?style=flat)](https://david-dm.org/jedireza/frame)
[![devDependency Status](https://david-dm.org/jedireza/frame/dev-status.svg?style=flat)](https://david-dm.org/jedireza/frame#info=devDependencies)


## Features

 - Login system with forgot password and reset password
 - Abusive login attempt detection
 - User roles for accounts and admins
 - Admins only notes and status history for accounts
 - Admin groups with shared permissions
 - Admin level permissions that override group permissions


## Technology

Frame is built with the [hapi](https://hapijs.com/) framework. We're
using [MongoDB](http://www.mongodb.org/) as a data store.


## Bring your own front-end

Frame is only a restful JSON API. If you'd like a ready made front-end,
checkout [Aqua](https://github.com/jedireza/aqua). Or better yet, fork
this repo and build one on top of Frame.


## Live demo

| url                                                                                                | username | password |
|:-------------------------------------------------------------------------------------------------- |:-------- |:-------- |
| [https://getframe.herokuapp.com/](https://getframe.herokuapp.com/)                                 | root     | root     |
| [https://getframe.herokuapp.com/documentation](https://getframe.herokuapp.com/documentation)       |          |          |

[Postman](http://www.getpostman.com/) is a great tool for testing and
developing APIs. See the wiki for details on [how to
login](https://github.com/jedireza/frame/wiki/How-to-login).


## Requirements

You need [Node.js](http://nodejs.org/download/) `>=8.x` and you'll need a
[MongoDB](http://www.mongodb.org/downloads) `>=2.6` server running.


## Installation

```bash
$ git clone https://github.com/jedireza/frame.git
$ cd frame
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

Simply copy `.env-sample` to `.env` and edit as needed. __Don't commit `.env`
to your repository.__


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

# > frame@0.0.0 inspect /home/jedireza/projects/frame
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


## Have a question?

Any issues or questions (no matter how basic), open an issue. Please take the
initiative to read relevant documentation and be pro-active with debugging.


## Want to contribute?

Contributions are welcome. If you're changing something non-trivial, you may
want to submit an issue before creating a large pull request.


```bash
$ npm test

# > frame@0.0.0 test /home/jedireza/projects/frame
# > lab -c -L

#  ..................................................
#  ..................................................
#  ..................................................
#  ..............

# 164 tests complete
# Test duration: 14028 ms
# No global variable leaks detected
# Coverage: 100.00%
# Linting results: No issues
```

## License

MIT


## Don't forget

What you build with Frame is more important than Frame.
