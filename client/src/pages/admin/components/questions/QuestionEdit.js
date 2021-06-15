import React, { useState, useEffect } from 'react'
import { Header, Button, Input, Table, Form } from 'semantic-ui-react'
import { Answers } from '../../components/answers/Answers'
import styles from '../../ControlPanel.module.css'

export const QuestionEdit = ({ data }) => {

    return (

        <>
            <Header as='h1'>Редактирование вопроса: {data[0].title}</Header>
            
            <Answers data={data} />
            
        </>
    )
}