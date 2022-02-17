const express = require('express');
const { nanoid } = require('nanoid');
const ShortenLink = require("../models/ShortenLink");

const router = express.Router();

router.get('/:shortUrl', async (req, res, next) => {
    try {
        const link = await ShortenLink.findById(req.params.shortUrl);

        if (!link) {
            return res.status(404).send({message: 'Not found'});
        }

        res.status(301).redirect(link.originalUrl)
    } catch (e) {
        next(e);
    }
});

router.post('/links', async (req, res, next) => {
    try {
        if (!req.body.originalUrl) {
            return res.status(400).send({message: 'Original URL is required'});
        }

        const linkData = {
            originalUrl: req.body.originalUrl,
            shortUrl: nanoid(7)
        };

        const link = new ShortenLink(linkData);
        await link.save();

        return res.send(link);
    } catch (e) {
        next(e);
    }
});

module.exports = router;