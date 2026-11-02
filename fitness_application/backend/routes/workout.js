const express = require("express");
const {
    getworkouts,
    getworkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')

const router = express.Router()

router.get('/', getworkouts)

router.get('/:id', getworkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router