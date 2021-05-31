import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { Quizes } from './pages/Quizes'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <Quizes />
            </Route>
        </Switch>
    )
}
