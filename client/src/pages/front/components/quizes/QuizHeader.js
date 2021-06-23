import React from 'react'
import { Header } from 'semantic-ui-react'


export const QuizHeader = ({header}) => {
    
    return (
        <>
            <Header as = 'h1' style={{color:"#fff"}}>{header[0].title}</Header>
            
        </>
    )
}