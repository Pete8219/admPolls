import React from 'react'
import { Switch, Route} from "react-router-dom"
import { ControlPanel } from './pages/admin/ControlPanel'

export const ControlRoutes = () => {
    return (
        <Switch>
            <Route path="/admin" exact>
                <ControlPanel />
            </Route>

        </Switch>
    )
}