const questionsService = require("../services/questions-service")

module.exports = (app) => {

    // /api/questions
    const findAllQuestions = (req, res) => {
        const questions = questionsService.findAllQuestions();
        res.send(questions)
    }

    // /api/quizzes/:qid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qid = req.params.qid;
        const questions = questionsService
            .findQuestionsForQuiz(qid)
        res.send(questions)
    }

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/questions", findAllQuestions);

}