import React, {  useState } from 'react'
import { QuizHeader } from './QuizHeader'
import { QuestionCounter } from '../questions/QuestionCounter'
import { Question } from '../questions/Question'
import { Button, Container, Message } from 'semantic-ui-react'
import styles from '../../styles.module.css'


export const  SelectedQuiz = ({ props }) => {
    const { questions } = props

    const [score, setScore ]    = useState(questions.length)
    const [counter, setCounter] = useState(0)
    const [finish, setFinish]   = useState(false)
    const [results, setResults] = useState([])
    

   
    const changeCounter = () => {
        setCounter (counter + 1)
        
    }

    const handleChange = (e , data) => {

        console.log(e.target.outerText)

        /* console.log(questions[counter].title)
        const answersArray = [...results]
        answersArray.push({answer: value, title: questions[counter].title})
        setResults(answersArray) */
    }

    return (
        <>
            <QuizHeader header={props.quiz}/>
            {counter === score ?
                    <div>
                       <Container className={styles.containerQuestion}>
                           <Message positive>
                               <Message.Header>Опрос окончен!</Message.Header>
                               <p>
                                   Спасибо за Ваше участие в опросе. Ваше мнение очень важно для нас.
                               </p>
                           </Message>
                       </Container>         
                    </div>
                    :
                    <div>
            
                    <QuestionCounter props = { {score, counter, questions} }  />
                    <Question props={ questions[counter] } data ={results} changeCounter={changeCounter} handleChange={handleChange}/>
                    </div>
            }

        </>
    )
}