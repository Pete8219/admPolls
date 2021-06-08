import React from 'react'
import { Header, Table, Input, Button, Form } from 'semantic-ui-react'
import styles from '../ControlPanel.module.css'
import { Link } from 'react-router-dom'


export const Quiz = ({ quiz, questions }) => {


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

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Вопрос</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {questions.map((question, index) => {
                        return(
                            <Table.Row key = {question._id}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell><Link to ={`/admin/question/${question._id}`}>{question.title}</Link></Table.Cell>
                                <Table.Cell><Input  value='500'/></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Button color='green'>Сохранить</Button>
        </>
    )
}