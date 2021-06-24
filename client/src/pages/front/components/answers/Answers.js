import React from 'react'
import {Form, Checkbox, Dropdown, Container } from 'semantic-ui-react'
import styles from './styles.module.css'
import { v4 as uuidv4 } from 'uuid'


export const Answers = ({answers,  handleChange}) => {
    const { title, answerType } = answers
    //const uid = uuidv4();
    //console.log(title)

    const options = []

    answers.answers.map((item, i) => {
        options.push(
            {key : i, text: item.answer, value: item.answer, grade: item.grade}
        )
    })

    

    

    if(answerType === 'DropDown') {
        return (
            <Form className={styles.formAnswers}>
            <Dropdown 
                type='dropdown'
                options = {options}
                onChange = {handleChange}
                placeholder = 'Choose an option'
                selection
                
            />
            </Form>
        )

    }else {
        
        return (
            
            <Form className={styles.formAnswers}>
                
                {
                
                options.map((option, i) => {
                    return(
                      <Form.Field key = {i}>
                          <Checkbox style={{color:"#000"}}
                            id = {i}
                            label = {option.value}
                            onChange = {handleChange}
                            /* checked= {checked} */
                            
                          />
                      </Form.Field>  
                    )
                })}
            </Form>
        )
    }
    

{/*     console.log(options)
    return (
        <>
        <div className={styles.containerAnswer}>
            <Form>
            {a.map((answer, index) => {
 

                    return (
                                <Form.Field key={index}>
                                <Checkbox 
                                    radio
                                    label = {answer.answer}
                                />   
                                </Form.Field> 
                    ) 
            }

                )}
            
        </Form>

        </div>
        </> 
    )
    */}
}