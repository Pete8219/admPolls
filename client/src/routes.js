import React from 'react'
import { Switch, Route, Redirect} from "react-router-dom"
import { Quizes } from './pages/Quizes'
import { QuizPage } from './pages/QuizPage'
import { ControlPanel } from './pages/admin/ControlPanel'
import { LoginForm } from './pages/admin/pages/LoginForm'
import { QuizesPage } from './pages/front/pages/quizes/QuizesPage'
import { SelectedQuizPage } from './pages/front/pages/quizes/SelectedQuizPage'

const isAuthorized = true

export const useRoutes = () => {
if(isAuthorized) {
    return (
        <Switch>
            <Route path="/admin" >
                <ControlPanel />
            </Route> 
            <Route path="/" exact>
                <QuizesPage />
            </Route>
{/*             <Route path="/quiz" exact>
                <QuizPage />
            </Route> */}
            <Route path="/quiz" exact>
                <SelectedQuizPage />
            </Route>

{/*             <Route path="/" exact>
                <Quizes />
            </Route> */}
            <Route path="/login" exact>
                <LoginForm />
            </Route>
            <Redirect to="/login" >
                <LoginForm />
            </Redirect>
        </Switch>
    )
} else {
    return (
        <Switch>
{/*             <Route path="/" exact>
                <Quizes />
            </Route> */}
            <Route path="/" exact>
                <QuizesPage />
            </Route>
            <Route path="/quiz" exact>
                <QuizPage />
            </Route>

{/*             <Route path="/" exact>
                <Quizes />
            </Route> */}
            <Route path="/login" exact>
                <LoginForm />
            </Route>

        </Switch>
    )
}


   
}
