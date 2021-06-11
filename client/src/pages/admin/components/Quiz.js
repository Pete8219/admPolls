import React, { useState } from 'react'
import { Header, Table, Input, Button, Form } from 'semantic-ui-react'
import styles from '../ControlPanel.module.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export const Quiz = ({ quiz, questions }) => {

    const history = useHistory()

    function AddRow(props) {
        let rows = []
        for (let i = 1; i < props.count + 1; i++) {
            rows.push(props.children(i))
            
        }

        return (
            <>
                {rows}
            </>
        )
    }

    const [count, setCount] = useState(questions.length)
    const incCount = () => {
        setCount(count +1)
        console.log(count)
    }


    const cancelHandler = () => {
        history.go(-1)
    }

    return (
        <>
        {/* <Header as = 'h2'>Опрос: " {quiz[0].title} "</Header> */}

        <div className={styles.quizName}>
            <Form>
            <Form.Field inline>
                <label>Название опроса</label>
                <Input className={styles.quizName__input} value={quiz[0].title}/>
            </Form.Field>
        </Form>
        </div>

        <Header as = 'h3'>Вопросы</Header>
        <Button color='blue' onClick={incCount}>{/* <Link to="/admin/question/create" style={{color:"#fff"}}> */}Добавить вопрос</Button>

            <Table celled style={{marginBottom:"5em"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Вопрос</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>


                    {questions.map((question, index) => {
                        return(
                            <Table.Row key = {question._id}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell style={{width:"70%"}}><Input  style={{width:"100%"}} value = {question.title} name='question'   /></Table.Cell>
                                {/* <Table.Cell><Link to ={`/admin/question/${question._id}`}>{question.title}</Link></Table.Cell> */}
                                <Table.Cell><Input  value='500'/></Table.Cell>
                                <Table.Cell><Button color='teal'>Ответы</Button></Table.Cell>

                            </Table.Row>
                        )
                    })}

                    <AddRow count={count}>
                       {(index) => 
                        {
                            return(
                                <Table.Row key = {index+1}>
                                    <Table.Cell>{index+1}</Table.Cell>
                                    <Table.Cell style={{width:"70%"}}><Input  style={{width:"100%"}} value = '' name='question'   /></Table.Cell>
                                    <Table.Cell><Input  value='500'/></Table.Cell>
                                    <Table.Cell><Button color='teal'>Ответы</Button></Table.Cell>
                                </Table.Row>
                            )
                        }
                       }
                    </AddRow>
                </Table.Body>
            </Table>
            <Button color='green' floated='right'>Сохранить</Button>
            <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>
        </>
    )
}