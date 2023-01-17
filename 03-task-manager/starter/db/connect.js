const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://nadia:i353C7StCFTiNiHa@nodeexpressprojects.gwxu6g2.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true,
    })

}


module.exports = connectDB;