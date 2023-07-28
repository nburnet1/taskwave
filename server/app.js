const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const wavesRouter = require('./waves');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(("/api/waves" , wavesRouter));
app.use(("api/wave/:id", wavesRouter));
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);

});


