import React from 'react'
import styles from './ControlPanel.module.css'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

export const ControlPanelMenu = () => {
    return (
        <Menu vertical className={styles.menuLeft}>
            <Menu.Item>
                <Menu.Header className={styles.menu__header}>Опросы</Menu.Header>
                    <Menu.Menu>
                    <Link to = "/admin">
                    <Menu.Item style={{fontSize:"1em"}}
                        name='Опросы'
                        />
                    </Link>    
                        <Link to = "/admin/active">
                        <Menu.Item style={{fontSize:"1em"}}
                        name='Активные опросы'
                        />
                        </Link>
                        <Menu.Item style={{fontSize:"1em"}}
                        name='Состоявшиеся опросы'
                        
                        
                        />
                        <Menu.Item style={{fontSize:"1em"}}
                        name='Создать опрос'
                        
                        
                        />
                </Menu.Menu>
            </Menu.Item>   
            <Menu.Item>
                <Menu.Header className={styles.menu__header}>Аналитика</Menu.Header>
                    <Menu.Menu>
                        
                        <Menu.Item style={{fontSize:"1em"}}
                        name='Все опросы'
                        />
                        <Menu.Item style={{fontSize:"1em"}}
                        name='Выбрать данные'
                        />
                        <Menu.Item style={{fontSize:"1em"}}
                        name='Проанализировать опрос'
                        
                        
                        />
                </Menu.Menu>
            </Menu.Item>     
        </Menu>
    )
}