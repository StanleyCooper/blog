const express = require('express');
const cors = require('cors');

const app = express();

// server routers
const blogsRouter = require('./blogs/blogs.router');

app.use(express.json());
app.use(cors());

app.use("/blogs", blogsRouter);

module.exports = app;