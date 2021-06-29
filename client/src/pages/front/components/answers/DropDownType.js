import React, {useState} from 'react'
import { Dropdown, Form } from 'semantic-ui-react'
import styles from './styles.module.css'


export const DropDownType = ({props}) => {

    const { options, handleChange } = props
    return (
        <Form className={styles.formAnswers}>
            <Dropdown 
                
                options = {options}
                onChange = {handleChange}
                placeholder = 'Choose an option'
                selection
                
            />
            </Form>
    )
}