import React from 'react'
import { Switch, Route} from "react-router-dom"
import { QuizesList } from './components/QuizesList'
import { QuizListActive } from './Quizes/QuizListActive'



export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/admin" exact>
                <QuizesList />
            </Route>
            <Route path="/admin/active" exact>
                <QuizListActive />
            </Route>


        </Switch>
    )
}
