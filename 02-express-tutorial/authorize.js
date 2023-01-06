//authorize is the middleware function
const authorize = (req,res,next) => { 
    const {user} = req.query
    if(user === 'john') {
        req.user = {name: 'john', id:3} //te middleware function add to the request req.user
        console.log('authorize')
        next()
    } else {
        res.status(401).send('Unauthorized')
    }

    console.log('useruseruser', req.query)
}

module.exports = authorize;