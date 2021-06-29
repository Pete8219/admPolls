import React, {useState} from 'react'
import { Dropdown, Form, Button } from 'semantic-ui-react'
import styles from './styles.module.css'


export const DropDownType = ({props}) => {

    const { title, options, onClick } = props

    const [result, setResult] = useState({})

    const handleChange = (e,  data ) => {
        
        setResult({question: title, answer: data.value})

    }

    return (
        <>
        <Form className={styles.formAnswers}>
            <Dropdown 
                
                options = {options}
                onChange = {handleChange}
                placeholder = 'Choose an option'
                selection
                
            />
            
            </Form>
            <div>
                <Button color = 'green' floated='right' onClick={onClick}>Ответить</Button>
            </div>
           </> 
    )
}