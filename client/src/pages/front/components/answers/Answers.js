import React from 'react'
import {Form, Checkbox, Dropdown } from 'semantic-ui-react'
import styles from './styles.module.css'
import { DropDownType } from './DropDownType'
import { RadioType } from './RadioType'
import { CheckboxType } from './CheckboxType'


const components = {
    DropDown: DropDownType,
    Radio : RadioType,
    Checkbox : CheckboxType
   
}

export const Answers = ({answers, counter, handleChange}) => {
    const {  answerType } = answers
    const options = []

    answers.answers.map((item, i) =>  {
        return(
        options.push(
            {key : i, text: item.answer, value: item.answer, grade: item.grade}
        )
        )
        
    })


    const SpecificComponent = components[answerType]
    return <SpecificComponent props ={{options, handleChange, counter}}/>

}