const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'OutdoorOdyssey',
        allowedFormats: ['jpeg', 'png', 'jpg', 'svg']
    },
});


module.exports = {
    cloudinary,
    storage
}