import React from 'react'
import { Switch, Route} from "react-router-dom"
import { Quizes } from './pages/Quizes'
import { QuizPage } from './pages/QuizPage'
import { ControlPanel } from './pages/admin/ControlPanel'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Quizes />
            </Route>
            <Route path="/quiz" exact>
                <QuizPage />
            </Route>
            <Route path="/admin" exact>
                <ControlPanel />
            </Route>
        </Switch>
    )
}
