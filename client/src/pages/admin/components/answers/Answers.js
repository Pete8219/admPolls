
import React, { useState } from 'react'
import { Header, Table, Input, Button, Form, Checkbox  } from 'semantic-ui-react'
import styles from '../../ControlPanel.module.css'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../../../../hooks/http.hook'
import { v4 as uuidv4} from 'uuid'



export const Answers = ({data}) => {
    const history = useHistory()
    const { request } = useHttp()
    const { isActive: a, isRequired: r, title: t, answers } = data[0]
    const [title, setTitle] = useState(t)
    const [ form, setForm ] = useState (answers)
    const [ isActive, setIsActive] = useState(a)
    const [ isRequired, setIsRequired] = useState(r)
    const [ newAnswers, setNewAnswers] = useState()


    const addHandler = () => {
        const rows = [ ...form]
        rows.push({answer:'', grade:''})
        setForm(rows)
    }
     
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

/*     const changeActive = () => {
        const target = e.target
        const value = target.checked
        console.log(value)
    }
 */
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
            quizeId: quizId,
            id: questionId,
            isActive,
            isRequired
        }

        try {
            const fetched = await request(`/questions/${questionId}`, "PATCH", question, {})
            cancelHandler()

        } catch (error) {
            
        }
    
    }
    
    return (
        <>

        <div className={styles.quizName}>
            <Form style={{margin:"20px 0 20px 0"}}>
            <Form.Field inline>
                <label>Вопрос</label>
                <Input className={styles.quizName__input}  value={title}  name='title'  onChange = {(e) => changeTitle(e) }  />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Активность' checked={isActive} name='isActive' onChange={() => setIsActive(!isActive)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='Обязательный' checked ={isRequired} name='isRequired' onChange={() => setIsRequired(!isRequired)}/>
            </Form.Field>
            </Form>
            </div>

        <Button color='blue' floating='left' onClick={addHandler}>Добавить ответ</Button>

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