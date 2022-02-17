const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShortenLinkSchema = new Schema({
    shortUrl: String,
    originalUrl: {
        type: String,
        required: true
    }
});

const ShortenLink = mongoose.model('ShortenLink', ShortenLinkSchema);

module.exports = ShortenLink;