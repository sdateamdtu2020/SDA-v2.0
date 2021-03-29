const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const port = 8000;

// const index = require('./routes/index');
// const climate = require('./routes/cubes/climate');
// const industry = require('./routes/cubes/industry');
// const forest = require('./routes/cubes/forest');
// const population = require('./routes/cubes/population');
// const merge = require('./routes/operators/merge');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined',{
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(morgan('combined'));

// app.use('/', index);
// app.use('/climate', climate);
// app.use('/industry', industry);
// app.use('/forest', forest);
// app.use('/population', population);
// app.use('/merge', merge);



app.listen(port, () => console.log('EDSDA is listening on port ' + `${port}` + '!'));
