import React from 'react'
import { Header } from 'semantic-ui-react'


export const QuizHeader = ({prop}) => {
    console.log(prop)
    return (
        <>
            <Header as = 'h1' style={{color:"#fff"}}>{prop}fsfsdf</Header>
        </>
    )
}