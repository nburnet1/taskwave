const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const wavesRouter = require('./waves');
const tasksRouter = require('./tasks');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(("/api/waves" , wavesRouter));
app.use(("api/wave/:id", wavesRouter));
app.use(("/api/wave/:id/tasks", tasksRouter));
app.use(("api/wave/:id/task/:id", tasksRouter));
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);

});


