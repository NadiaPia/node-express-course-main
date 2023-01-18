const mongoose = require('mongoose');

//for the validation we should use value for the keys as the objects. 
//For ex. not "name": Srting, but "name": {}.
//It allows set up more restrictions for the inserting data.
//required: [true, 'must provide name'] doesn't allow to send an empty data. Second value of the array is the custom message
//trim - skips empty symbols (white space) ("   nadia  " = "nadia")


const TaskSchema = new mongoose.Schema({   
    name: {                                    
        type: String,                         
        required: [true, 'must provide name'],    
        trim: true,                               
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model("Task", TaskSchema)