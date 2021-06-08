import React, {useState, useEffect} from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { Table, Header } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


export const QuizesList = () => {
    const { request } = useHttp()
    if(localStorage.getItem('QuizId')) {
        localStorage.removeItem('QuizId')
    }
    

    const [quizes, setQuizes] = useState([])


    useEffect(() => {
        const fetchQuizes = async () => {
            try {
                const fetched = await request("/quizes", "GET", null, {})
                setQuizes(fetched)
            } catch (error) {
                
            }

        }
        fetchQuizes()
    },[request])



        return (
            <div>
                <Header as='h2'>Список опросов</Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Опрос</Table.HeaderCell>
                            <Table.HeaderCell>Количество голосов</Table.HeaderCell>
                            <Table.HeaderCell>Начало</Table.HeaderCell>
                            <Table.HeaderCell>Окончание</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        
                        {quizes.map((quiz,index) => {
                            return(
                                
                                <Table.Row key = { index }>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell><Link to={`/admin/${quiz._id}`}>{quiz.title}</Link></Table.Cell>
                                <Table.Cell>156</Table.Cell>
                                <Table.Cell>{(new Date()).toLocaleString()}</Table.Cell>
                                <Table.Cell>{(new Date()).toLocaleString()}</Table.Cell>
                                </Table.Row>
                                
                            )
                        })}
                        
                    </Table.Body>

                </Table>


            </div>
        )
        
    

}