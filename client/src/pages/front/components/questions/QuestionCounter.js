import React from 'react'

import { Header } from 'semantic-ui-react'

export const QuestionCounter = ({props}) => {

    const { counter, score, questions } = props

    
    return (
        <>
            <Header as = 'h2'>Вопрос {counter + 1} из {score}. {questions[counter].title}</Header>
        </>
    )
}