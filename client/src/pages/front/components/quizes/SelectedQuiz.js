import React, {  useState, useEffect } from 'react'
import { QuizHeader } from './QuizHeader'
import { QuestionCounter } from '../questions/QuestionCounter'
import { Question } from '../questions/Question'
import { Button, Container, Message } from 'semantic-ui-react'
import styles from '../../styles.module.css'
import { getDayOfYear } from 'date-fns'


export const  SelectedQuiz = ({ props }) => {
    const { questions } = props

    const [score, setScore ]    = useState(questions.length)
    const [counter, setCounter] = useState(0)
    //const [finish, setFinish] = useState(false)
    const [results, setResults] = useState([])
    const [checked, setChecked] = useState(false)
    const [question, setQuestion] = useState(questions[0])
    

    useEffect(() => {
            setQuestion(questions[counter])
    },[counter])

    console.log(question)

   
    const changeCounter = () => {
        setCounter (counter + 1)
        setChecked(false)
        
    }

    const handleChange = (e , data) => {
       // setChecked(!checked)
        
        const obj = {}
        if(data.type === 'dropdown') {
             obj.answer = data.value
             obj.title = questions[counter].title
            // const dropdownArray = [...results]
             //dropdownArray.push

        }else {
            
            if(data.type === "checkbox" && data.checked === true) {
                console.log(data)
                const checkboxArray = [...results]
                checkboxArray.push({id: data.id, answer: data.label, title: questions[counter].title})
                setResults(checkboxArray)
            }else {
                if(data.type === "checkbox" && data.checked === false) {
                    console.log(data)
                const checkboxArray = [...results]
                const arr = checkboxArray.filter(item => item.id !== data.id)
                setResults(arr)
                }
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
                    <Question props={ question }  changeCounter={changeCounter} handleChange={handleChange} />
                    </div>
            }

        </>
    )
}