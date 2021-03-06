import React, { useState } from 'react'
import { Header} from 'semantic-ui-react'
import { Answers } from '../../components/answers/Answers'
import { QuestionHeader } from './QuestionHeader'
import { useHistory} from 'react-router-dom'

import { useHttp } from '../../../../hooks/http.hook'

export const QuestionEdit = ({ data }) => {

    
    const history = useHistory()
    const { request } = useHttp()

    const {title: t, isActive: a, isRequired: r, answers, sortId: s, answerType} = data[0]

 

    answers.sort((a,b) => a.sortId - b.sortId)

    const [title, setTitle] = useState(t)
    const [isActive, setIsActive] = useState(a)
    const [isRequired, setIsRequired] = useState(r)
    const [ form, setForm ] = useState (answers)
    const [sortId, setSortId] = useState(s)
    const [value, setValue] = useState(answerType)

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

/*     const changeSortId = (e) => {
        setSortId(e.target.value)
    } */

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
    
    const handleChange = (e, {value}) => {
        setValue ( value )
    }

    const cancelHandler = () => {
        history.go(-1)
    }

    const deleteHandler = (id) => {
        
        setForm(form.filter((item, i) => id !==i))
    }

    const saveAnswers = async () => {
        const questionId = localStorage.getItem('qId')
        
        const quizId = localStorage.getItem('QuizId')
        console.log(quizId)

        const question = {
            title,
            answers: form,
            answerType: value,
            quizeId: quizId,
            id: questionId,
            sortId,
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
        value,
        isActive,
        isRequired,
        //sortId: sortId || '',
        changeActive,
        changeRequired,
        changeTitle,
        //changeSortId,
        addHandler,
        changeHandler,
        cancelHandler,
        saveAnswers,
        deleteHandler,
        handleChange


    }


    return (

        <>
            <Header as='h1'>???????????????????????????? ??????????????: {data[0].title}</Header>
            <QuestionHeader props={params}/>
            
            <Answers props={params} />
            
        </>
    )
}