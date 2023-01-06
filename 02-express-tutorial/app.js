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

app.get('/api/products/:productID/reviews/:review', (req, res)=> {
  res.send("hello World")

})




app.get('/api/v1/query', (req,res)=>{
  //console.log("req.queryreq.queryreq.queryreq.query", req.query);
  const search = req.query.search;
  //const{ search, limit } = req.query
  const limit = req.query.limit;
  let sortedProducts = [...products];
  if(search) {
    sortedProducts=sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if(sortedProducts.length < 1) {
    return res.status(200).send('No Product Match Your Search')
  }
 res.status(200).json(sortedProducts)

})


app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})