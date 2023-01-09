
const express = require('express');
const app = express();
const logger  = require('./logger');
const authorize  = require('./authorize');

// middleware functions have options: 1. our own - we can set up our own middleware, for example authorize or login
//2. express - it provides a few build in middleware functions. We don't worry about the functionality, 
//but just reference the docs: ex: app.use(express.static('./public'));
//3. third party - we have to install it.

app.use([authorize, logger])
//app.use('/api', logger) //if to specify the url the middleware function logger will work for the routes that go after '/api'


app.get('/', (req,res)=>{
  console.log('req.user', req.user) //will consloe.log {name: 'john', id:3}
  res.send("Home")
});

app.get('/about', (req,res)=>{
  res.send("About")
})

app.get('/api/products', (req,res)=>{
  res.send("products")
})

app.get('/api/items', (req,res)=>{
  res.send("items")
})


app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})