import React, { useEffect, useState } from 'react'
import { Header, Button, Table, Input } from 'semantic-ui-react'
import { useHistory, Link } from 'react-router-dom'
import { QuestionHeader } from '../questions/QuestionHeader'
import { useHttp } from '../../../../hooks/http.hook'


export const QuestionsList = ( {quiz, questions} ) => {
    const { title:t, isActive:a, isRequired:r, _id:id } = quiz[0]
    const history = useHistory()
    const { request } = useHttp()

     useEffect(() => {
        setForm(questions)
    },[questions]) 


    const [ form, setForm ] = useState ([])
    const [title, setTitle] = useState(t||'')
    const [isActive, setIsActive] = useState(a)
    const [isRequired, setIsRequired] = useState(r)

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


    const changeForm = (index, e) => {
        
        const { name, value } = e.target
        const row = [...form]
        row[index][name] = value
        setForm(row)
        
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
                            
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>


                        {form.map((item, index) => {
                            const {_id:id} = item
                            return(
                                <Table.Row key = {index}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell style={{width:"70%"}}><Link to={`/admin/question/${id}`}>{item.title}</Link></Table.Cell>
                                    <Table.Cell style={{width:"15%"}}><Input  value={item.sortID} name='sortID' onChange={(e)=> changeForm(index, e)}/></Table.Cell>
                                    <Table.Cell>{(item.isActive)? ` Да` : `Нет`}</Table.Cell>
                                    <Table.Cell>{(item.answers).length}</Table.Cell>

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