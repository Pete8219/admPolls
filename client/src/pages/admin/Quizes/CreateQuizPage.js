import React, { useState, useEffect } from 'react'
import {  useHistory } from 'react-router-dom'

import { Header,  Button } from 'semantic-ui-react'
import { QuizHeader } from '../components/quizes/QuizHeader'
import styles from '../ControlPanel.module.css'
import { registerLocale, setDefaultLocale  } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import { useHttp } from '../../../hooks/http.hook'

registerLocale('ru', ru)

export const CreateQuizPage = () => {
    const history = useHistory()
    const { request } = useHttp()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
   
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const changeActive = () => {
        setIsActive(!isActive)
    }

    const cancelHandler = async() => {
        history.go(-1)
    }

    const params = {
        title,
        changeTitle,
        description,
        changeDescription,
        isActive,
        changeActive,
        startDate,
        setStartDate,
        endDate,
        setEndDate
    }

    const data = {
        title,
        description,
        isActive,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
    }

    const saveQuiz = async() => {
        try {
            await request(`/quizes/add`, "POST", data, {})
        } catch (error) {}

        history.go(-1)
    }

    return (
        <>
        <Header as ='h2'>Новый опрос: {title}</Header>
        <QuizHeader props = { params} />
      
        <Button color='green' floated='right' onClick={saveQuiz}>Сохранить</Button>
        <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>
        </>
    )
}