import React from 'react'
import { Answers } from '../answers/Answers'

import { Container, Button } from 'semantic-ui-react'
import styles from '../../styles.module.css'


export const Question = ({props, counter, changeCounter, handleChange}) => {
    


    return (
        <>
            <Container className={styles.containerQuestion}>
                <Answers answers={props} counter={counter} handleChange={handleChange} onClick={changeCounter}/>
                
                         
            </Container>
        </>
    )

}