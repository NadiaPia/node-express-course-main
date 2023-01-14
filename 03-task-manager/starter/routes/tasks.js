const express = require('express');
const router = express.Router();
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

// '/api/v1/tasks' = '/'

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;