import React from 'react'
import { Checkbox, Input, Form} from 'semantic-ui-react'
import styles from '../../ControlPanel.module.css'


export const QuestionHeader = ({props}) => {

    const {title, isActive, isRequired, changeTitle, changeActive, changeRequired} = props
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
            </Form>
            </div>
        </>
    )
}