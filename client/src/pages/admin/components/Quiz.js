import React from 'react'
import { Header } from 'semantic-ui-react'


export const Quiz = ({ quiz, questions }) => {


    return (
        <>
        <Header as = 'h2'>Опрос: " {quiz[0].title} "</Header>
        <Header as =' h3'>Вопросы</Header>
        </>
    )
}