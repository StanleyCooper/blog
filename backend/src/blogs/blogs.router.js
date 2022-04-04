const router = require('express').Router();
const controller = require('./blogs.controller');

router
    .route("/")
    .get(controller.list);

module.exports = router;