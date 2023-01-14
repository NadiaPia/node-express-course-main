const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://nadia:i353C7StCFTiNiHa@nodeexpressprojects.gwxu6g2.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
})
.then(() => console.log('CONNECTED TO THE DB...'))
.catch((err) => console.log(err))