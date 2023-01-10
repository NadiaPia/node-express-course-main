
const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false})); //parse form data
app.use(express.json()) //parse json (to have an access to the req.body)

app.get('/api/people', (req,res)=>{
  res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req,res)=>{
  const { name } = req.body //we have access to req.body because of the middleware app.use(express.json())
  if(!name){
    return res.status(401).json({success: false,msg:'please provide name value'})
  }
  res.status(201).json({success:true,person:name})
})

app.post('/login', (req,res)=>{
  console.log(req.body.name)
  const {name} = req.body  //name is from form in the index.html 
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please Provide Credential')

})
app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})