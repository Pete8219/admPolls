import React from 'react'
import { Answers } from '../answers/Answers'

import { Container, Button } from 'semantic-ui-react'
import styles from '../../styles.module.css'


export const Question = ({props, data, changeCounter, handleChange}) => {
    


    return (
        <>
            <Container className={styles.containerQuestion}>
                <Answers answers={props} data={data} handleChange={handleChange}/>
                <Button color = 'green' floated='right' onClick={changeCounter}>Ответить</Button>
                         
            </Container>
        </>
    )

}