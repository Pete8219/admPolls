import React, { useState } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { useHistory, useParams } from 'react-router-dom'
import { QuizHeader } from './QuizHeader'



export const QuizEdit = ({data}) => {
    console.log(data)
    const { title: t, isActive: a, startDate: start, endDate: end } = data[0]
    
    const history = useHistory()
    
    const [title, setTitle]         = useState(t)
    const [isActive, setIsActive]   = useState(a || false)
    const [startDate, setStartDate] = useState(new Date(start))
    const [endDate, setEndDate]     = useState(new Date(end))

    const changeTitle = (event) => {
        const { value } = event.target
        setTitle(value)
    }

    const changeActive = () => {
        setIsActive(!isActive)

    }

    const saveQuiz = () => {

    }

    const cancelHandler = () => {
        history.go(-1)
    }




    const headerParams = {
            title: title,
            isActive,
            startDate,
            setStartDate,
            endDate,
            setEndDate,
            changeTitle,
            changeActive
    }

        return (
            <>
                <Header as = 'h1'>Редактирование опроса: {title}</Header>
                <QuizHeader props={ headerParams } />
                <Button color='green' floated='right' onClick={saveQuiz}>Сохранить</Button>
                <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>
                
            </>
    )
}
