import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import { QuizEdit } from '../components/quizes/QuizEdit'
import { useHttp } from '../../../hooks/http.hook'


export const EditQuizPage = () => {

    const  {id}       = useParams()

    const { loading, request }  = useHttp()
    const [quizId, setQuizId]   = useState(id) 
    const [quiz, setQuiz]       = useState()

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

    return (
        <>
            
            {!loading && quiz && <QuizEdit data={quiz}/>}
        </>
    )
}