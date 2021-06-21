import React from 'react'
import { Checkbox, Input, Form} from 'semantic-ui-react'
import styles from '../../ControlPanel.module.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale} from 'react-datepicker'
//import styles from '../../ControlPanel.module.css'
import ru from 'date-fns/locale/ru'

registerLocale('ru', ru)


export const QuizHeader = ({props}) => {
    console.log(props)

    const {title, isActive, changeTitle, changeActive,startDate, setStartDate, endDate, setEndDate} = props
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

            </Form>
            </div>
            <div className={styles.quizName} style={{justifyContent:"flex-start"}}>
            <div >   
            <Form style={{margin:"20px 0 20px 0", display:"flex", flexDirection:"row"}}>
                <Form.Field style={{marginRight:"30px"}} >
                    <label>Дата начала</label>
                    <DatePicker 
                        locale="ru"
                        selected={startDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption='Время'
                        dateFormat="dd-MM-yyyy HH:mm"
                        onChange={(date) => setStartDate(date)}/> 
                </Form.Field>
                <Form.Field >
                    <label>Дата окончания</label>
                    <DatePicker
                     locale="ru"
                     selected={endDate}
                     showTimeSelect
                     timeFormat="HH:mm"
                     timeIntervals={15}
                     timeCaption='Время'
                     dateFormat="dd-MM-yyyy HH:mm"
                     onChange={(date) => setEndDate(date)}/> 
                </Form.Field>
            </Form>
            </div> 
            </div>
           
        </>
    )
}