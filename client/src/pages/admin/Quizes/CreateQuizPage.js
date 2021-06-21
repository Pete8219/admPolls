import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { Header, Form, Button, Table, Input } from 'semantic-ui-react'
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
    const [isActive, setIsActive] = useState(false)
    const [isRequired, setIsRequired] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [form, setForm] = useState([])


/*     useEffect(() => {
        if (localStorage.getItem('Quiz')){
            const quizData = JSON.parse(localStorage.getItem('Quiz'))
            const {title, isActive, startDate:st, endDate: end} = quizData

            console.log(st, end)
            setTitle(title)
            setIsActive(isActive)
            setStartDate(new Date(st))
            setEndDate(new Date(end))
            
        }
    },[]) */


    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeActive = () => {
        setIsActive(!isActive)
    }

    const changeRequired = () => {
        setIsRequired(!isRequired)
    }

    const cancelHandler = async() => {
        history.go(-1)
    }

    const params = {
        title,
        changeTitle,
        isActive,
        changeActive,
        startDate,
        setStartDate,
        endDate,
        setEndDate
    }

    const data = {
        title,
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
{/*         <div className={styles.quizName} style={{justifyContent:"flex-start"}}>
            <div >   
            <Form style={{margin:"20px 0 20px 0", display:"flex", flexDirection:"row"}}>
                <Form.Field style={{marginRight:"30px"}} >
                    <label>Дата начала</label>
                    <DatePicker 
                        locale="ru"
                        selected={startDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption='Время'
                        dateFormat="dd-MM-yyyy HH:mm"
                        onChange={(date) => setStartDate(date)}/> 
                </Form.Field>
                <Form.Field >
                    <label>Дата окончания</label>
                    <DatePicker
                     locale="ru"
                     selected={endDate}
                     showTimeSelect
                     timeFormat="HH:mm"
                     timeIntervals={15}
                     timeCaption='Время'
                     dateFormat="dd-MM-yyyy HH:mm"
                     onChange={(date) => setEndDate(date)}/> 
                </Form.Field>
            </Form>
            </div> 
            </div> */}
           
                <Button color='green' floated='right' onClick={saveQuiz}>Сохранить</Button>
                <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>
        </>
    )
}