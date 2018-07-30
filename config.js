'use strict';
const Confidence = require('confidence');
const Dotenv = require('dotenv');


Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};


const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'Pintortico',
    port: {
        web: {
            $filter: 'env',
            test: 9090,
            production: process.env.PORT,
            $default: 9000
        }
    },
    swagger: {
        host: {
            $filter: 'env',
            test: '0.0.0.0:9000',
            production: 'pintortico-backend.herokuapp.com',
            default: '0.0.0.0:9000'
        }
    },
    nodemailer: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'michaelrojasp@gmail.com',
            pass: process.env.SMTP_PASSWORD
        }
    },
    system: {
        fromAddress: {
            name: 'Michael Rojas',
            address: 'michaelrojasp@gmail.com'
        },
        toAddress: {
            name: 'Michael Rojas',
            address: 'michaelrojasp@gmail.com'
        }
    },
    cloudinary: {
        cloud_name: 'ddi2el7ue',
        api_url: 'https://api.cloudinary.com/v1_1/ddi2el7ue',
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
