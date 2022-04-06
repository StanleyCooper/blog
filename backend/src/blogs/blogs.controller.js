const blogsService = require("./blogs.service");

async function list(req, res, next) {
    const data = await blogsService.list();
    return res.json({ data });
}

module.exports = {
    list,
}