import React, { useState } from 'react'
import { Checkbox, Form, Button } from 'semantic-ui-react'
import styles from './styles.module.css'

export const CheckboxType = ({ props }) => {
    const { options, handleChange, counter, onClick } = props
    return (
        <>
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
        <div>
                <Button color = 'green' floated='right' onClick={onClick}>Ответить</Button>
        </div>
        </>
    )
}