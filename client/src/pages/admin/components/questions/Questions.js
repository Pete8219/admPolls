import React from 'react'
import { Header, Table, Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export const Questions = ({props}) => {
    
    const { form, changeForm, deleteHandler } = props


    return(
        <>
            <Header as = 'h2'>Список вопросов</Header>
            <Button color='blue' ><Link to="/admin/question/create/" style={{color:"#fff"}}> Добавить вопрос</Link></Button>

            <Table celled style={{marginBottom:"5em"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Вопрос</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Активен</Table.HeaderCell>
                        <Table.HeaderCell>Ответов</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>
                <Table.Body>


                    {form.map((item, index) => {
                        const {_id:id} = item
                        return(
                            <Table.Row key = {id}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell style={{width:"60%"}}><Link to={`/admin/question/${id}`}>{item.title}</Link></Table.Cell>
                                <Table.Cell ><Input  value={item.sortID} name='sortID' onChange={(e)=> changeForm(index,id, e)}/></Table.Cell>
                                <Table.Cell>{(item.isActive)? ` Да` : `Нет`}</Table.Cell>
                                <Table.Cell>{(item.answers).length}</Table.Cell>
                                <Table.Cell><Button onClick={() => deleteHandler(id)}>Удалить</Button></Table.Cell>

                            </Table.Row>
                        )
                    })}

                    
                </Table.Body>
            </Table>
        </>
    )
}