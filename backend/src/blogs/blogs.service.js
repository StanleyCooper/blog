const knex = require("../db/connection");

function list() {
    return knex("blogs").select("*");
}

module.exports = {
    list,
}