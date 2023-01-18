const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    //an empty object in the .find({}) allow to get all the documents in the collection
    try {
        const tasks = await Task.find({})        
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//to create Task: we have a model (Task), in the model we pass in the Schema and 
//in order to get the instance we go with the name of the model (Task)
//with the method .create
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body) //create a 'task' collection in mongoDB
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if(!task) {
            return res.status(404).json({ msg:`No task With id : ${taskID}` })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const deleteTask = async (req,res) => {
    try {
        const { id:taskID } = req.params; 
        const task = await Task.findOneAndDelete({ _id: taskID })
        if(!task) {
            return res.status(404).json({ msg:`No task With id : ${taskID}` })
        }
        res.status(200).json({ task })
        
        
    } catch(error) {
        res.status(500).json({ msg: error })
    }
}


const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        //{new:true, runValidators:true,} new:true allows to edit the data right away (don't need to refresh all the tasks)
        //runValidators:true doesn't allow empty value of the name as we set up the validation in our models
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true,})
        if(!task) {
            return res.status(404).json({ msg:`No task With id : ${taskID}` })
        }
        res.status(200).json({ task })
        
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}