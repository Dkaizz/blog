const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

const route = require('./routes');

const app = express();
const port = 3000;
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(3000);
