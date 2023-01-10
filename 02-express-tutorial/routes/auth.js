const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{
    console.log(req.body.name)
    const {name} = req.body  //name is from the form in the index.html 
    if(name){
      return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credential')
  });


module.exports = router;