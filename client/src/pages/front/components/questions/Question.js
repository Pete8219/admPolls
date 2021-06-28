import React from 'react'
import { Answers } from '../answers/Answers'

import { Container, Button } from 'semantic-ui-react'
import styles from '../../styles.module.css'


export const Question = ({props, counter, changeCounter, handleChange, select}) => {
    


    return (
        <>
            <Container className={styles.containerQuestion}>
                <Answers answers={props} counter={counter} handleChange={handleChange} handleSelect={select}/>
                <Button color = 'green' floated='right' onClick={changeCounter}>Ответить</Button>
                         
            </Container>
        </>
    )

}