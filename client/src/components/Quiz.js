import React from 'react'
import { Header, Card, Form } from 'semantic-ui-react'


export const Quiz = ({ data, title }) => {
    console.log(data)
    
    
    return (
        <div>
            <Header as ='h1' style={{color:"#fff"}}>Опрос на тему : {title}</Header>
            {data.map((question, index) => {
                const {answers, answerType} = question
                console.log(answers)

                return(
                    <div>
                    <Header as='h3'>Вопрос {index +1} из {data.length}. {question.title}</Header>
                        <Card>
                            <Card.Content>
                                <Form>
                                <Form.Group>    
                                    <Form.Radio 
                                        label='big'
                                        value='sdfsdf'
                                    />
                                </Form.Group>
                                </Form>
                            </Card.Content>
                        </Card>
                    </div>    
                )
                
            })}

        </div>
    )
}