// const questionsService = require("../services/questions-service")
//
// module.exports = (app) => {
//
//     // /api/questions
//     const findAllQuestions = (req, res) => {
//         // const questions = questionsService.findAllQuestions();
//         questionsService.findAllQuestions()
//             .then((questions) => {
//                 res.send(questions)
//             })
//     }
//
//     // /api/quizzes/:qid/questions
//     const findQuestionsForQuiz = (req, res) => {
//         const qid = req.params.qid;
//         // const questions = questionsService
//         //     .findQuestionsForQuiz(qzid)
//         const questions = questionsService
//             .findQuestionsForQuiz(qid)
//             .then((questions) => {
//                 res.send(questions)
//             })
//     }
//
//     app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
//     app.get("/api/questions", findAllQuestions);
//
// }

const questionsService = require("../services/questions-service")
module.exports = function(app) {
    app.get('/api/quizzes/:qid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions)))
    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))
    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
}