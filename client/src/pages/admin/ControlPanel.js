import React from 'react'
import { Header } from 'semantic-ui-react'
import styles from './ControlPanel.module.css'
import { ControlPanelMenu } from './ControlPanelMenu'
import { HeaderPanel } from './components/HeaderPanel'
import { Content } from './components/Content'
import { MainPage } from './pages/MainPage'
import { QuizesList } from './components/QuizesList'
import { useRoutes } from './adminRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

export const ControlPanel = () => {
    const aRoutes = useRoutes()
    return (
        <Router>
        <div>
            <HeaderPanel />
            
            <div className={styles.container}>
                <div className="left__menu">
                <ControlPanelMenu />
                </div>
                <div className={styles.content}>
                    {aRoutes}
                </div>    
                
            </div>
        </div>
        </Router>
    )
}
