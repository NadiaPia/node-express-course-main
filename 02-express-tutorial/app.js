
const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth')



app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false})); //parse form data
app.use(express.json()) //parse json (to have an access to the req.body)
app.use('/api/people', people);
app.use('/login', auth);






app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})