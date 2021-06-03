import React from 'react'
import styles from '../ControlPanel.module.css'


export const Content = (props) => {
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    )
}