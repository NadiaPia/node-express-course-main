const express = require('express');
const app = express();
const {products} = require('./data')

//server responses with the json data
/*
app.get('/', (req,res)=> {
  res.json(products)
})*/

//server responses with the html
app.get('/', (req,res)=> {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
});

app.get('/api/products', (req,res)=> {
  const newProducts = products.map((product) => {
    const {id, name, image} = product
    return {id, name, image}
  })
  res.json(newProducts)

})

app.get('/api/products', (req,res)=> {
  res.json(products.map((item) => {
    return [item.id, item.name, item.image, item.prise ]
  }))

})

app.get('/api/products/:productID', (req,res)=> {
  //console.log('reqreqreqreqreq', req)  
  //console.log('reqreqreqreqreq', req.params)
  //const productID =  req.params.productID //the same as const {productID} = req.params

  const {productID} = req.params //the same as const productID =  req.params.productID, because req.params is an object  
  const singleProduct = products.find((product) => product.id === Number(productID))
  
  if(!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)

})


app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})