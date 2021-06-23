import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export const Quiz = ({ props, clickHandler }) => {

    return (
        <Card key={props._id} id={props._id} centered style={{fontFamily: "Roboto Condensed"}}>
                     <Card.Content header = {props.title} />
                     <Card.Content description = {props.description}/>
                     <Card.Content extra>
                         <Button
                          color='green'
                          onClick={() => clickHandler(props._id)}
                        >
                        Принять участие
                         </Button>
                     </Card.Content>    
                 </Card>
    )
}

