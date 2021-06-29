import React, {  useState, useEffect } from 'react'
import { QuizHeader } from './QuizHeader'
import { QuestionCounter } from '../questions/QuestionCounter'
import { Question } from '../questions/Question'
import { Button, Container, Message } from 'semantic-ui-react'
import styles from '../../styles.module.css'



export const  SelectedQuiz = ({ props }) => {
    const { questions } = props

    const [score, setScore ]    = useState(questions.length)
    const [counter, setCounter] = useState(0)
    const [results, setResults] = useState([])
    //const [checked, setChecked] = useState(true)
    const [question, setQuestion] = useState(questions[counter])

  

    useEffect(() => {
            setQuestion(questions[counter])
            
            
    },[counter,questions])

   
    const changeCounter = () => {
        setCounter (counter + 1)
 
    }

    const selectionOption = (e, data) => {
        const answer = {}
        
        const result = [...results]
        answer.title = question.title
        answer.select = data.value
        result.push(answer)
        
    }

    const handleChange = (e , data) => {

        if(data.type==='checkbox') {
            
            if(data.checked === true) {
                console.log('checked')
                const  checks = [...results]
                checks.push({title: question.title, answer: data.label, id: data.id})
                setResults(checks)
    
            }else {
                console.log('unchecked')
                const checks = [...results]
                const arr = checks.filter(item => item.id !== data.id)
                setResults(arr)
    
            }
        }

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
                    <Question props={ question } counter={counter} changeCounter={changeCounter} handleChange={handleChange} />
                    </div>
            }

        </>
    )
}