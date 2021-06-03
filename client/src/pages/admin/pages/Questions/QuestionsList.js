import React, { useState, useEffect } from 'react'
import { useHttp } from '../../../../hooks/http.hook'
import { useParams } from 'react-router-dom'
import { Quiz } from '../../components/Quiz'


export const QuestionsList = () => {
    const { id } = useParams()
    const { loading, request } = useHttp()
    
    const [quiz, setQuiz] = useState()
    const [questions, setQuestions] = useState([])


    useEffect(() => {

        const fetchQuiz = async () => {
            try {
                const fetched = await request(`/quizes/${id}`, "GET", null, {})
                setQuiz(fetched)
                console.log(fetched)
                
            } catch (error) {}
 
        }
        fetchQuiz()
    }, [request, id])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
               const fetched = await request (`/questions/byQuize/${id}`, "GET", null, {})
               setQuestions(fetched) 
               console.log(fetched)
            } catch (error) {}
        }
        fetchQuestions()
    },[id, request])


    return (
        <>
        {!loading && quiz && questions && <Quiz quiz={quiz} questions={questions}/>}
        </>
    )
}