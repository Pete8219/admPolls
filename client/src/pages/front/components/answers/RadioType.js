import React, { useState } from 'react'
import { Checkbox, Form, Button } from 'semantic-ui-react'
import styles from './styles.module.css'


export const RadioType = ({props}) => {

    const { options, /* handleChange, */ counter, onClick } = props


    const [val, setVal] = useState('')

    const handleChange = (e, data) => {
        setVal(data.value)
    }

    return (
        <>
        <Form className={styles.formAnswers}>
            
            {
            
            options.map((option, i) => {
                const key = `${counter}` + `${i}`
                return(
                  <Form.Field key = {key}>
                     <Checkbox style={{color:"#000"}}
                        radio
                        id = {key}
                        label = {option.value}
                        value = {option.value}
                        name = 'checkboxRadioGroup'
                        checked = {val === `${option.value}`}
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