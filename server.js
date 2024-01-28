const express = require('express');
const api = require('./routes/apiroutes');
const html = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', html);
app.use('/api', api);


app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));
