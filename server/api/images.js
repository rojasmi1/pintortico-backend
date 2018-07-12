'use strict';
const Config = require('../../config');
const axios = require('axios');


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
            const {api_url, api_key, api_secret} = Config.get('/cloudinary');
            const encodedAuth = `Basic ${new Buffer(`${api_key}:${api_secret}`).toString('base64')}`;

            //TODO: Define in constants file
            const baseImagesFolder = 'Pintortico_General';

            const response = await axios.get(
                `${api_url}/resources/image/upload?prefix=${baseImagesFolder}`,
                {
                    headers: {
                        'Authorization': encodedAuth
                    }
                }
            );

            const resources = response.data.resources;
            const images = resources.map(resource => {
                const {public_id: id, width, height} = resource;
                return {id, width, height};
            });

            return images;
        }
    });
};


module.exports = {
    name: 'api-images',
    dependencies: [],
    register
};
