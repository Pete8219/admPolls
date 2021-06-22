import React, { useEffect, useState } from 'react'
import { Header, Button, Table, Input, Form } from 'semantic-ui-react'
import { useHistory, Link } from 'react-router-dom'
import { QuestionHeader } from './QuestionHeader'
import { useHttp } from '../../../../hooks/http.hook'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale  } from 'react-datepicker'
import styles from '../../ControlPanel.module.css'
import ru from 'date-fns/locale/ru'

registerLocale('ru', ru)

export const QuestionsList = ( {quiz, questions} ) => {
    const { title:t, isActive:a, isRequired:r, _id:id} = quiz[0]
    let stDate = quiz[0].startDate
    let enDate = quiz[0].endDate

    
    if(stDate === undefined) {
        stDate = new Date().toISOString()
    }
    if(enDate === undefined) {
        enDate = new Date().toISOString()
    }
 

    console.log(stDate,enDate)
    
    const history = useHistory()
    const { request } = useHttp()

     useEffect(() => {
        setForm(questions)
    },[questions])  ;



    const [ form, setForm ] = useState ([])
    const [title, setTitle] = useState(t||'')
    const [isActive, setIsActive] = useState(a)
    const [isRequired, setIsRequired] = useState(r)
    const [startDate, setStartDate] = useState(new Date(stDate))
    const [endDate, setEndDate] = useState(new Date(enDate))

    const cancelHandler = () => {
        history.go(-1)
    }

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeActive = () => {
        setIsActive(!isActive)
    }

    const changeRequired = () => {
        setIsRequired(!isRequired)
    }


    const changeForm = (index,id, e) => {
        
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


    const params = {
            title,
            isActive,
            isRequired,
            changeTitle,
            changeActive,
            changeRequired
        
    }

    const data = {
            title,
            isActive,
            isRequired,
            startDate:startDate.toISOString(),
            endDate:endDate.toISOString()

    }


    const saveQuiz = async() => {
        try {
            await request(`/quizes/${id}`, "PATCH", data, {})

        } catch (e) {}


        form.map(async (item) => {
            const sortID = item.sortID

            try {
                await request(`/questions/${item._id}`, "PATCH", {sortID}, {})
            } catch (e) {}
        })
        history.go(-1)

    }

    return (
        <>  
            <Header as='h1'>Опрос : {title}</Header>
            <QuestionHeader props={params}/>
            <div className={styles.quizName} style={{justifyContent:"flex-start"}}>
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
            </div>
            <Header as='h2'>Список вопросов</Header>
            <Button color='blue' ><Link to="/admin/question/create/" style={{color:"#fff"}}> Добавить вопрос</Link></Button>

                <Table celled style={{marginBottom:"5em"}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Вопрос</Table.HeaderCell>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Активен</Table.HeaderCell>
                            <Table.HeaderCell>Ответов</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>


                        {form.map((item, index) => {
                            const {_id:id} = item
                            return(
                                <Table.Row key = {id}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell style={{width:"60%"}}><Link to={`/admin/question/${id}`}>{item.title}</Link></Table.Cell>
                                    <Table.Cell ><Input  value={item.sortID} name='sortID' onChange={(e)=> changeForm(index,id, e)}/></Table.Cell>
                                    <Table.Cell>{(item.isActive)? ` Да` : `Нет`}</Table.Cell>
                                    <Table.Cell>{(item.answers).length}</Table.Cell>
                                    <Table.Cell><Button onClick={() => deleteHandler(id)}>Удалить</Button></Table.Cell>

                                </Table.Row>
                            )
                        })}

                        
                    </Table.Body>
                </Table>
                <Button color='green' floated='right' onClick={saveQuiz}>Сохранить</Button>
                <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>
        </>
    )
}