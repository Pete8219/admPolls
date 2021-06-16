import React, { useState } from 'react'
import { Header, Button, Table, Input } from 'semantic-ui-react'
import { useHistory, Link } from 'react-router-dom'
import { QuestionHeader } from '../questions/QuestionHeader'


export const QuestionsList = ( {quiz, questions} ) => {
    const { title, isActive, isRequired } = quiz[0]
   
    const history = useHistory()

    const [ form, setForm ] = useState (questions)

   

    const cancelHandler = () => {
        history.go(-1)
    }


    const params = {
        title,
        isActive,
        isRequired
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
                            return(
                                <Table.Row key = {item._id}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell style={{width:"70%"}}><Link to={`/admin/question/${item._id}`}>{item.title}</Link></Table.Cell>
                                    <Table.Cell><Input  value={item.sortId} name='sortId' /></Table.Cell>
                                    <Table.Cell>{(item.isActive)? ` Да` : `Нет`}</Table.Cell>
                                    <Table.Cell>{(item.answers).length}</Table.Cell>

                                </Table.Row>
                            )
                        })}

                        
                    </Table.Body>
                </Table>
                <Button color='green' floated='right'>Сохранить</Button>
                <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>
        </>
    )
}