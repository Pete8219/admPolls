import React, {useState} from 'react'
import { Checkbox, Input, Form, Dropdown} from 'semantic-ui-react'
import styles from '../../ControlPanel.module.css'


export const QuestionHeader = ({props}) => {

    const {title, value, isActive, isRequired, changeTitle, changeActive, changeRequired, handleChange} = props
    
    const options =[
        {key: 1, text: "Один вариант ответа", value: 'Radio'},
        {key: 2, text: "Выбор нескольких вариантов", value: 'Checkbox'},
        {key: 3, text: "Выпадающий список", value: 'DropDown'}
    ]

    return (
        <>
         <div className={styles.quizName}>
            <Form style={{margin:"20px 0 20px 0"}}>
            <Form.Field inline>
                <label>Наименование</label>
                <Input className={styles.quizName__input}  value={title}  name='title'  onChange = {(e) => changeTitle(e) }  />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Активен' checked={isActive} name='isActive' onChange={changeActive}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='Обязательный' checked ={isRequired} name='isRequired' onChange={changeRequired}/>
            </Form.Field>
            <Form.Field>
                <label>Тип ответов</label>
                <Dropdown
                    onChange = { handleChange }
                    options = { options }
                    selection
                    value = {value}
                    style={{width:"30%"}}
                />
            </Form.Field>
            </Form>
            </div>
        </>
    )
}