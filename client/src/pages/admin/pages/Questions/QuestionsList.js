import React, { useState, useEffect } from 'react'
import { useHttp } from '../../../../hooks/http.hook'
import { useParams } from 'react-router-dom'
import { Quiz } from '../../components/Quiz'


export const QuestionsList = () => {
    
    const   { id }   = useParams()
 
    const { loading, request } = useHttp()
    const [quiz, setQuiz] = useState()
    const [quizId, setQuizId] = useState(id)
    const [questions, setQuestions] = useState([])

  

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
         const fetchQuiz = async () => {
            try {
                const fetched = await request(`/quizes/${quizId}`, "GET", null, {})
                setQuiz(fetched)
                
                
            } catch (error) {}
 
        }
        fetchQuiz()
    }, [request, quizId])

    useEffect(() => {
         const fetchQuestions = async () => {
           
            try {
               const fetched = await request (`/questions/byQuize/${quizId}`, "GET", null, {})
               setQuestions(fetched) 
               
            } catch (error) {}
        }
        fetchQuestions()
    },[request, quizId])

   

    return (
        <>
        
         {!loading && quizId && quiz && questions && <Quiz quiz={quiz} questions={questions}/>}
        </>
    )
}