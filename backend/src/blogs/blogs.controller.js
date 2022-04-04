const path = require('path');

// Use our blogs data
const blogs = require(path.resolve('src/data/data-blogs'));

// Middleware
function list(req, res) {
    res.json({ data: blogs });
}

module.exports = {
    list,
}