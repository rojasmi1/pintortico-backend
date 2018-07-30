'use strict';
const Confidence = require('confidence');
const Config = require('./config');
const Package = require('./package.json');
const Path = require('path');


const criteria = {
    env: process.env.NODE_ENV
};


const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        routes: {
            security: false,
            cors: true
        },
        host: '127.0.0.1',
        port: Config.get('/port/web')
    },
    register: {
        plugins: [
            {
                plugin: 'inert'
            },
            {
                plugin: 'vision'
            },
            {
                plugin:'hapi-swagger',
                options: {
                    info: {
                        title: 'Pintortico API Documentation',
                        version: Package.version,
                        description: `API Documentation`
                    },
                    grouping: 'tags',
                    sortTags: 'name',
                    tags: [
                        {
                            name: 'contact'
                        },
                        {
                            name: 'main'
                        },
                        {
                            name: 'cloudinary'
                        }
                    ]
                }
            },
            {
                plugin: './server/api/contact'
            },
            {
                plugin: './server/api/main'
            },
            {
                plugin: './server/api/images'
            }
        ]
    }
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
