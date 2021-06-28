import React from 'react'
import {Form, Checkbox, Dropdown } from 'semantic-ui-react'
import styles from './styles.module.css'
//import { v4 as uuidv4 } from 'uuid'


export const Answers = ({answers, counter, handleChange,  handleSelect }) => {
    const {  answerType } = answers
    //const uid = uuidv4();


    const options = []

    answers.answers.map((item, i) =>  {
        return(
        options.push(
            {key : i, text: item.answer, value: item.answer, grade: item.grade}
        )
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
                    const key = `${counter}` + `${i}`
                    return(
                        
                       <Form.Field key = {key}>
                         <Checkbox style={{color:"#000"}}
                            id = {key}
                            label = {option.value}
                            onChange = {handleChange}
                           
                            
                          />
                       </Form.Field>
                    )
                })}
            </Form>
        )
    }

}