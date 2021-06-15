import React, { useState, useEffect } from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { useParams } from 'react-router-dom'
import { Answers } from '../components/answers/Answers'
import { QuestionEdit } from '../components/questions/QuestionEdit'

export const QuestionEditPage = () =>  {

    const { id }                            = useParams()

    const { loading, request }              = useHttp()
    
    const [ answers, setAnswers ]           = useState()
    const [ questionId, setQuestionId ]     = useState(id)
    



    useEffect(() => {
        if(localStorage.getItem('qId')){
            setQuestionId(localStorage.getItem('qId'))
         }

    },[])

    useEffect(() => {
        localStorage.setItem('qId', id)
        setQuestionId(localStorage.getItem('qId'))
    }, [questionId, id])

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const fetched = await request (`/questions/${questionId}`, "GET", null, {})
                setAnswers(fetched) 

            } catch (error) {}

        }
        fetchAnswers()
    },[request, questionId])

    


    return (
        <>
         {!loading && answers && <QuestionEdit data={answers}/>}
        </>
    )
}