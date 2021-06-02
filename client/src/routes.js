import React from 'react'
import { Switch, Route} from "react-router-dom"
import { Quizes } from './pages/Quizes'
import { QuizPage } from './pages/QuizPage'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Quizes />
            </Route>
            <Route path="/quiz" exact>
                <QuizPage />
            </Route>
        </Switch>
    )
}
