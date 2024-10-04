const express = require("express");
const app = express();
const coinRoute = require('./routes/coin');
app.use('/coin', coinRoute);
app.listen(3000, ()=>{console.log('running server on http://localhost:3000')})