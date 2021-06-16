import React from 'react'
import { Header, Button, Table, Input } from 'semantic-ui-react'
import { useHistory, Link } from 'react-router-dom'


export const QuestionsList = ( {quiz, questions} ) => {

    const history = useHistory()
    const cancelHandler = () => {
        history.go(-1)
    }

    return (
        <>
            <Header as='h1'>Список вопросов</Header>
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


                        {questions.map((question, index) => {
                            return(
                                <Table.Row key = {question._id}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell style={{width:"70%"}}><Link to={`/admin/question/${question._id}`}>{question.title}</Link></Table.Cell>
                                    <Table.Cell><Input  value='500'/></Table.Cell>
                                    <Table.Cell>{(question.isActive)? ` Да` : `Нет`}</Table.Cell>
                                    <Table.Cell>{(question.answers).length}</Table.Cell>

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