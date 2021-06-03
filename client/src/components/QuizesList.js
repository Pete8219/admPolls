import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { HeaderPage } from './HeaderPage'
import { Navbar } from './Navbar'

export const QuizesList = ({quizes, clickHandler}) => {


    return (
         <div className="container">
             <HeaderPage />
             <Navbar />
             <Card.Group itemsPerRow={2}>
             {quizes.map(quiz => {
                 return(
                 <Card key={quiz._id} id={quiz._id} centered style={{fontFamily: "Roboto Condensed"}}>
                     <Card.Content header = {quiz.title} />
                     <Card.Content description = 'Оцените работу своей управляющей компании.По результатам опросов, мы сделаем выводы и примем меры'/>
                     <Card.Content extra>
                         <Button color='green' onClick={() => clickHandler(quiz._id, quiz.title)}>
                             Принять участие
                         </Button>
                     </Card.Content>    
                 </Card>
                   ) 
            })}
            </Card.Group>
         </div>
        
       )
    }
    


