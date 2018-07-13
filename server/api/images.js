'use strict';
const Config = require('../../config');
const axios = require('axios');
const ImagesController = require('../controllers/imagesController');

const register = function (server, serverOptions) {

    server.route({
        method: 'GET',
        path: '/api/baseImages',
        options: {
            tags: ['api','cloudinary'],
            description: 'Get cloudinary base images. [No Scope]',
            notes: 'Get cloudinary base images.',
            auth: false,
        },
        handler: async function (request, h) {
            return await ImagesController.getBaseImages();
        }
    });
};


module.exports = {
    name: 'api-images',
    dependencies: [],
    register
};
