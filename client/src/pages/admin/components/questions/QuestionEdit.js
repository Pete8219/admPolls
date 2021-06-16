import React, { useState } from 'react'
import { Header} from 'semantic-ui-react'
import { Answers } from '../../components/answers/Answers'
import { QuestionHeader } from './QuestionHeader'
import { useHistory} from 'react-router-dom'

import { useHttp } from '../../../../hooks/http.hook'

export const QuestionEdit = ({ data }) => {

    
    const history = useHistory()
    const { request } = useHttp()

    const {title: t, isActive: a, isRequired: r, answers} = data[0]

    answers.sort((a,b) => a.sortId - b.sortId)

    const [title, setTitle] = useState(t)
    const [isActive, setIsActive] = useState(a)
    const [isRequired, setIsRequired] = useState(r)
    const [ form, setForm ] = useState (answers)

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
        rows.push({answer:'', grade:'', sortId:''})
        setForm(rows)
    }

    const changeHandler = (e, index) => {
        const {name, value } = e.target
        const newArray = [...form]
        newArray[index][name] = value
        setForm(newArray)
    } 

    const cancelHandler = () => {
        history.go(-1)
    }

    const saveAnswers = async () => {
        const questionId = localStorage.getItem('qId')
        const quizId = localStorage.getItem('QuizId')
        

        const question = {
            title,
            answers: form,
            quizeId: quizId,
            id: questionId,
            isActive,
            isRequired
        }

        try {
            await request(`/questions/${questionId}`, "PATCH", question, {})
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
        saveAnswers


    }


    return (

        <>
            <Header as='h1'>Редактирование вопроса: {data[0].title}</Header>
            <QuestionHeader props={params}/>
            
            <Answers props={params} />
            
        </>
    )
}