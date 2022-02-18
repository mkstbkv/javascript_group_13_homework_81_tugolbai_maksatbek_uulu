const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShortenLinkSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: String,
});

const ShortenLink = mongoose.model('ShortenLink', ShortenLinkSchema);

module.exports = ShortenLink;