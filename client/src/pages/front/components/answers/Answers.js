import React from 'react'
import {Form, Checkbox, Dropdown, Container } from 'semantic-ui-react'
import styles from './styles.module.css'


export const Answers = ({answers, data, handleChange}) => {
    const { title, answerType } = answers
    console.log(title)

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
                options = {options}
                onChange = {handleChange}
                placeholder = 'Choosee an option'
                selection
                
            />
            </Form>
        )

    }else {
        
        return (
            
            <Form className={styles.formAnswers}>
                
                {options.map((option, i) => {
                    return(
                      <Form.Field key = {i}>
                          <Checkbox style={{color:"#000"}}
                            
                            label = {option.value}
                            onChange = {handleChange}
                            
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