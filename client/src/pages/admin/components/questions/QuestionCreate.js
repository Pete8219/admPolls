import React, { useState } from 'react'
import {  Header } from 'semantic-ui-react'
import { QuestionHeader } from './QuestionHeader'
import { Answers } from '../answers/Answers'

import { useHttp } from '../../../../hooks/http.hook'
import { useHistory } from 'react-router-dom'

export const QuestionCreate = () => {
   
    const history = useHistory()
    const { request } = useHttp()
    const [title, setTitle] = useState('')
    const [isActive, setIsActive] = useState()
    const [isRequired, setIsRequired] = useState()
    const [ form, setForm ] = useState ([])
    const [value, setValue] = useState('Radio')



    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeActive = () => {
        setIsActive(!isActive)
    }
    const changeRequired = () => {
        setIsRequired(!isRequired)
    }

    const addHandler = () => {
        const rows = [ ...form]
        rows.push({answer:'', grade:''})
        setForm(rows)
    }

    const changeHandler = (e, index) => {
        const {name, value } = e.target
        const newArray = [...form]
        newArray[index][name] = value
        setForm(newArray)
    } 

    const handleChange = (e, {value}) => {
        setValue ( value )
    }

    const cancelHandler = () => {
        history.go(-1)
    }

    const saveAnswers = async () => {
        const questionId = localStorage.getItem('qId')
        const quizId = localStorage.getItem('QuizId')
        console.log(questionId)

        const question = {
            title,
            answers: form,
            quizeId: quizId,
            answerType: value,
            isActive,
            isRequired
        }

        try {
            await request(`/questions/add`, "POST", question, {})
            cancelHandler()

        } catch (error) {
            
        }
    
    }


    const params = {
        title: title || '',
        form: form || '',
        isActive,
        isRequired,
        changeActive,
        changeRequired,
        changeTitle,
        addHandler,
        changeHandler,
        cancelHandler,
        saveAnswers,
        handleChange


    }

    return (
        <>
            <Header as ='h1'>Новый вопрос</Header>
            <QuestionHeader props ={params}/>
            <Answers props={params}/>

        </>
    )


}