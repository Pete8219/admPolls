import React, {useState, useEffect} from 'react'
import { useHttp } from '../../../../hooks/http.hook'
import { Table, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export const QuizesAdminList = () => {
    //const {isActive:a} = props
    const { request } = useHttp()
    
    localStorage.clear()

    const [quizes, setQuizes] = useState([])


    useEffect(() => {
        const fetchQuizes = async () => {
            try {
                const fetched = await request("/quizes", "GET", null, {})
                setQuizes(fetched)
            } catch (error) {}

        }
        fetchQuizes()
    },[request])


    

        return (
            <div>
                <Header as='h2'>Список опросов</Header>
                <Button color= "blue"><Link to="/admin/create" style={{color:"#fff"}}>Новый опрос</Link></Button>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Опрос</Table.HeaderCell>
                            <Table.HeaderCell>Приняло участие</Table.HeaderCell>
                            <Table.HeaderCell>Активен</Table.HeaderCell>
                            <Table.HeaderCell>Начало</Table.HeaderCell>
                            <Table.HeaderCell>Окончание</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        
                        {quizes.map((quiz,index) => {
                            const stDate = new Date(quiz.startDate)
                            const enDate = new Date(quiz.endDate)
                            return(
                                
                                
                                <Table.Row key = { index }>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell><Link to={`/admin/${quiz._id}`}>{quiz.title}</Link></Table.Cell>
                                <Table.Cell>156</Table.Cell>
                                <Table.Cell>{quiz.isActive? `Да` : `Нет`}</Table.Cell>
                                <Table.Cell>{stDate.toLocaleDateString()}</Table.Cell>
                                <Table.Cell>{enDate.toLocaleDateString()}</Table.Cell>
                                </Table.Row>
                                
                            )
                        })}
                        
                    </Table.Body>

                </Table>


            </div>
        )
        
    

}