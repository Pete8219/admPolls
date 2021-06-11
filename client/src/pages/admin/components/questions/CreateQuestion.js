import React, { useState } from 'react'
import { Input, Button , Table, Header, Form } from 'semantic-ui-react'
import styles from '../../ControlPanel.module.css'

export const CreateQuestion = () => {
    const quizId = localStorage.getItem('QuizId')

    const [form, setForm] = useState({
        title: '',
    })

    const [answers, setAnswers] = useState([])
    const [countRow, setCountRow] = useState(2)


    const changeTitle = (e) => {
       const  { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const changeAnswers = (e)=> {
        const { name, value } = e.target

        const newArray = [...answers]

        newArray.push()
    }





    return (
        <>
            <Header as ='h1'>Новый вопрос</Header>

            <div className={styles.quizName}>
            <Form>
            <Form.Field inline>
                <label>Вопрос</label>
                <Input className={styles.quizName__input} value={form.title} name ='title' onChange={(e) => changeTitle(e)}/>
            </Form.Field>
        </Form>
        </div>


        <Header as ='h2'>Ответы</Header>

        <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Ответ</Table.HeaderCell>
                        <Table.HeaderCell>Оценка</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                   

                  
                        
                            <Table.Row>
                                <Table.Cell>{1}</Table.Cell>
                                <Table.Cell style={{width:"60%"}}><Input  style={{width:"100%"}} value = '' name='answer'  onChange = {(e) => changeAnswers(e)} /></Table.Cell>
                                <Table.Cell><Input   value = ''  name='grade' onChange = {(e) => changeAnswers(e)} /></Table.Cell>
                                <Table.Cell><Input  value='500'/></Table.Cell>
                            </Table.Row>
                        
                      
                </Table.Body>
            </Table>
            <Button floated ='right' color='green' >Сохранить</Button>
            <Button floated ='right' color='red' >Отмена</Button>
        </>
    )


}