const express = require("express");
const app = express();
const coinRoute = require('./routes/coin');
const usersRoute = require('./routes/users');
const loginRoute = require('./routes/login');
//const jwtCookie = require('./middleware/jwtAuth');

app.use('/login', loginRoute);
app.use('/coin', coinRoute);
app.use('/users', usersRoute);

app.listen(3000, ()=>{console.log('running server on http://localhost:3000')})