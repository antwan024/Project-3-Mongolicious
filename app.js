const express = require('express');
const app = express();

const tasksRoutes = require('./api/routes/tasks');
const pointsRoutes = require('./api/routes/points');

app.use('/tasks', tasksRoutes);
app.use('/points', pointsRoutes);


module.exports = app;