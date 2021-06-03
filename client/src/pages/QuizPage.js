import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Quiz } from '../components/Quiz'
import { useHistory } from 'react-router-dom'




export const QuizPage = () => {
    const history = useHistory()
    const {loading, request} = useHttp()

    const quizData = JSON.parse(localStorage.getItem("QuizId"))
    const {id, title} = quizData
    
    

    const [quiz, setQuiz] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(false)
    const [answers, setAnswers] = useState([])
    const selectedAnswer = answers
    const pollData = {
        quizId: quizData.id,
        data: selectedAnswer
    }


    const saveAnswers = async () => {
        try {
            const fetched = await request(`/answers/add`, "POST", {pollData}, {})


        } catch (error) {}

    }

    const clickHandler = (id,grade, e) => {
        selectedAnswer.push({questionId: id, answerText:e.target.outerText, grade})
        setAnswers(selectedAnswer)
        setCurrentQuestion(currentQuestion + 1)
        setScore(false)
        

        if(currentQuestion === quiz.length - 1) {
            saveAnswers()
        }
    }

     if(!quizData) {
        history.push("/")
    } 

     useEffect(() => {

        const fetchQuiz = async () => {
            try {
                const fetched = await request(`/questions/byQuize/${id}`, "GET", null, {})
                
                setQuiz(fetched)

            } catch (error) {}
        }

        fetchQuiz()
    }, [ request, id])

    useEffect(() => {
        setTimeout(() => {
            setScore(true)
        },800)
    })



    return (
        <>
            {!loading && quiz && <Quiz data ={ quiz } title ={title} clickHandler = {clickHandler} current= { currentQuestion } score={score}/> }

        </>
    )
}