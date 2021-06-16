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
    const [sortId, setSortId] = useState([])


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

    const changeSortId = (e, id) => {
        const sortIdArray = [...sortId]
        
        sortIdArray.push

        console.log(id)


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
            history.go(-1)
        } catch (e) {}
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
                                <Table.Row key = {id}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell style={{width:"70%"}}><Link to={`/admin/question/${id}`}>{item.title}</Link></Table.Cell>
                                    <Table.Cell style={{width:"15%"}}><Input  value={item.sortId || ''} name='sortId' onChange={(e)=> changeSortId(e, id)}/></Table.Cell>
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