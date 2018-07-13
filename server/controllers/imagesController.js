const Config = require("../../config");
const axios = require("axios");

class ImageController {
    async getBaseImages() {
        const { api_url, api_key, api_secret } = Config.get("/cloudinary");
        const encodedAuth = `Basic ${new Buffer(
            `${api_key}:${api_secret}`
        ).toString("base64")}`;

        //TODO: Define in constants file
        const baseImagesFolder = "Pintortico_General";

        const response = await axios.get(
            `${api_url}/resources/image/upload?prefix=${baseImagesFolder}&context=true&tags=true`,
            {
                headers: {
                    Authorization: encodedAuth
                }
            }
        );

        const resources = response.data.resources;
        const images = resources
            .map(resource => {
                const {
                    public_id,
                    width,
                    height,
                    context,
                    tags,
                    secure_url
                } = resource;
                const image = {
                    id: public_id,
                    width,
                    height,
                    meta: context.custom,
                    tags,
                    src: secure_url
                };
                return image;
            })
            .reduce((acc, image) => {
                //Base images should only have one tag
                acc[image.tags[0]] = image;
                return acc;
            }, {});

        return images;
    }
}

module.exports = new ImageController();
