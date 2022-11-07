const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
const API_URL = `http://localhost:${PORT}/api`;
module.exports.API_URL = API_URL;

require('./server/config/mongoose.config');

app.use(cors());

// middleware for POST requests
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./server/routes/products.routes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));