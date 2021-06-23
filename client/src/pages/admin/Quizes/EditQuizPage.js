import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { QuizEdit } from '../components/quizes/QuizEdit'
import { useHttp } from '../../../hooks/http.hook'


export const EditQuizPage = () => {

    const  {id}                 = useParams()

    const { loading, request }  = useHttp()
    const [quizId, setQuizId]   = useState(id) 
    const [quiz, setQuiz]       = useState()
    const [questions, setQuestions] = useState()

    useEffect(() => {
        if(localStorage.getItem('QuizId')){
            setQuizId(localStorage.getItem('QuizId'))
         }

    },[])

    useEffect(() => {
        localStorage.setItem('QuizId', id)
        setQuizId(localStorage.getItem('QuizId'))
    }, [quizId, id])

    useEffect(() => {
        console.log(quizId)
        const fetchQuiz = async() => {
            try {
                 const fetched = await request(`/quizes/${quizId}`, "GET", null, {}) 
                 setQuiz(fetched)   
            } catch (error) {
                
            }
        }
        fetchQuiz()
    },[quizId, request])

    useEffect(() => {
        const FetchQuestions = async() => {
            const fetched = await request(`/questions/byQuize/${quizId}`, "GET", null, {})
            setQuestions(fetched)
        }
        FetchQuestions()

    },[quizId, request])

    return (
        <>
            
            {!loading && quiz && questions && <QuizEdit data={quiz} questionsData={questions}/>}
        </>
    )
}