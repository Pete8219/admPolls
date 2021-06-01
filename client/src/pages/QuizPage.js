import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Quiz } from '../components/Quiz'
import { useHistory } from 'react-router-dom'



export const QuizPage = () => {
    const history = useHistory()
    const {loading, request} = useHttp()

    const quizData = JSON.parse(localStorage.getItem("QuizId"))
    const {id, title} = quizData
    
    

    const [quiz, setQuiz] = useState()
    

     if(!quizData) {
        history.push("/")
    } 

     useEffect(() => {
        if(!quizData) {
            return
        }

        const fetchQuiz = async () => {
            try {
                const fetched = await request(`/questions/byQuize/${id}`, "GET", null, {})
                
                setQuiz(fetched)

            } catch (error) {}
        }

        fetchQuiz()
    }, [request, id])



    return (
        <>
            {!loading && quiz && <Quiz data ={ quiz } title ={title}/> }

        </>
    )
}