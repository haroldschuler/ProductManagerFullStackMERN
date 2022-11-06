const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());

// middleware for POST requests
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./server/routes/products.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));