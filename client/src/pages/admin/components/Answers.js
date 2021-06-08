
import React, { useState } from 'react'
import { Header, Table, Input, Button, Form  } from 'semantic-ui-react'
import styles from '../ControlPanel.module.css'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../../../hooks/http.hook'



export const Answers = ({data}) => {
    const history = useHistory()
    const { loading, request } = useHttp()

    const answers = data.map(item => {
        return ({
            answers: item.answers,
            title: item.title
        })
    })

    const [title, setTitle] = useState(answers[0].title)

    const [ form, setForm ] = useState (answers[0].answers)

    

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const changeHandler = (e, index) => {
        const {name, value } = e.target
        const newArray = [...form]
        newArray[index][name] = value
   
        setForm(newArray)
    } 


    const cancelHandler = () => {
        history.go(-1)
    }

    const saveAnswers = async () => {
        const questionId = localStorage.getItem('qId')
        const quizId = localStorage.getItem('QuizId')
        console.log(questionId)

        const question = {
            title,
            answers: form,
            quizId
        }

        try {
            const fetched = await request(`/questions/${questionId}`, "PATCH", question, {})

        } catch (error) {
            
        }

        
       
    }
    
    return (
        <>
        <div className={styles.quizName}>
            <Form>
            <Form.Field inline>
                <label>Вопрос</label>
                <Input className={styles.quizName__input}  value={title}  name='title' onChange = { changeTitle } />
            </Form.Field>
        </Form>
        </div>

        <Header as = 'h3'>Ответы</Header>

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
                    {form.map((item, index) => {

                        const {answer, grade} = item
                        return(
                            <Table.Row key = {index}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell style={{width:"60%"}}><Input  style={{width:"100%"}} value = {answer} name='answer'  onChange = {(e) => changeHandler(e,index)} /></Table.Cell>
                                <Table.Cell><Input   value = {grade}  name='grade' onChange = {(e) => changeHandler(e, index)} /></Table.Cell>
                                <Table.Cell><Input  value='500'/></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Button floated ='right' color='green' onClick={saveAnswers}>Сохранить</Button>
            <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>

      
        </>
    )
}