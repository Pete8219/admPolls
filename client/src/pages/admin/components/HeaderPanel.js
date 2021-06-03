import React from 'react'
import { Header } from 'semantic-ui-react'
import styles from '../ControlPanel.module.css'


export const HeaderPanel = () => {
    return (
        <Header as ='h1' className={styles.header}>Панель управления</Header>
    )
}