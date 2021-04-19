// const mongoose = require("mongoose")
// const quizzesSchema = require("./quizzes-schema")
// const quizzesModel = mongoose.model(
//     "QuizzesModel",
//     quizzesSchema
// )
//
// module.exports = quizzesModel

const mongoose = require('mongoose')
const quizSchema = require('./quizzes-schema')
const quizModel = mongoose.model(
    'QuizModel',
    quizSchema
)
module.exports = quizModel