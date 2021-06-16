
import React from 'react'
import {Table, Input, Button } from 'semantic-ui-react'



export const Answers = ({props}) => {

    const { saveAnswers, cancelHandler, addHandler, changeHandler, form} = props

    
   
    return (
        <>
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
                    {(form) ? form.map((item, index) => {
                        
                        const {answer, grade, sortId} = item
                        return(
                            <Table.Row key = {index}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell style={{width:"60%"}}><Input  style={{width:"100%"}} value = {answer} name='answer'  onChange = {(e) => changeHandler(e,index)} /></Table.Cell>
                                <Table.Cell><Input   value = {grade}  name='grade' onChange = {(e) => changeHandler(e, index)} /></Table.Cell>
                                <Table.Cell><Input  value={sortId} name='sortId' onChange = {(e) => changeHandler(e, index)} /></Table.Cell>
                            </Table.Row>
                        )
                    }): null}
                    
                </Table.Body>
            </Table>
            <Button floated ='right' color='green' onClick={saveAnswers}>Сохранить</Button>
            <Button floated ='right' color='red' onClick = {cancelHandler}>Отмена</Button>

      
        </>
    )
}