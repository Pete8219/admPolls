import React from 'react'
import { Answers } from '../answers/Answers'

import { Container, Button } from 'semantic-ui-react'
import styles from '../../styles.module.css'


export const Question = ({props, changeCounter}) => {


    return (
        <>
            <Container className={styles.containerQuestion}>
                <Answers answers={props}/>
                <Button color = 'green' floated='right' onClick={changeCounter}>Ответить</Button>
                         
            </Container>
        </>
    )

}