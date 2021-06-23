import React, { useState } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { QuizHeader } from './QuizHeader'
import { Questions }    from '../questions/Questions'
import { useHttp } from '../../../../hooks/http.hook'



export const QuizEdit = ({data, questionsData}) => {
    
    const { request } = useHttp()
    const { title: t, description:d, isActive: a, startDate: start, endDate: end, _id } = data[0]
    
    const history = useHistory()
    
    const [title, setTitle]         = useState(t)
    const [description, setDescription] = useState(d||'')
    const [isActive, setIsActive]   = useState(a || false)
    const [startDate, setStartDate] = useState(new Date(start))
    const [endDate, setEndDate]     = useState(new Date(end))
    const [form, setForm]           = useState(questionsData)

    const changeTitle = (event) => {
        const { value } = event.target
        setTitle(value)
    }

    const changeDescription = (e) => {
        const { value } = e.target
        setDescription(value)
    }

    const changeActive = () => {
        setIsActive(!isActive)

    }

    const changeForm = (index, e) => {
        
        const { name, value } = e.target
        const row = [...form]
        row[index][name] = value
        setForm(row)
        
    }

    const deleteHandler = async (id) => {
        try {
            await request(`/questions/${id}`, "DELETE", null, {})

        } catch(e){}

        setForm(form.filter(({_id: i})=> id !==i))
    }


    const headerParams = {
        title: title,
        description: description,
        isActive,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        changeTitle,
        changeActive,
        changeDescription
}

    const questionsParams = {
        form,
        changeForm,
        deleteHandler
    }

    const QuizData = {
        title,
        description,
        isActive,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString()

}



    const saveQuiz = async() => {
        try {
            await request(`/quizes/${_id}`, "PATCH", QuizData, {})

        } catch (e) {}


        form.map(async (item) => {
            const sortID = item.sortID

            try {
                await request(`/questions/${item._id}`, "PATCH", {sortID}, {})
            } catch (e) {}
        })
        history.go(-1)

    }

    const cancelHandler = () => {
        history.go(-1)
    }

        return (
            <>
                <Header as = 'h1'>Редактирование опроса: {title}</Header>
                <QuizHeader props={ headerParams } />
                <Questions props = { questionsParams }/>
                <Button color='green' floated='right' onClick={saveQuiz}>Сохранить</Button>
                <Button color='red' floated ='right' onClick = {cancelHandler}>Отмена</Button>
                
            </>
    )
}
