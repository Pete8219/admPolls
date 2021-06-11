import React from 'react'
import { Switch, Route} from "react-router-dom"
import { QuizesList } from './components/QuizesList'
import { QuizListActive } from './Quizes/QuizListActive'
import { HeldQuizes } from './Quizes/HeldQuizes'
import { CreateQuiz } from './Quizes/CreateQuiz'
import { QuestionsList } from './pages/Questions/QuestionsList'
import { QuestionPage } from './pages/Questions/QuestionPage'
import { CreateQuestion } from './components/questions/CreateQuestion'






export const useRoutes = () => {
    return (
        <Switch>

            <Route path="/admin" exact>
                <QuizesList />
            </Route>
            <Route path="/admin/active" exact>
                <QuizListActive />
            </Route>
            <Route path="/admin/held" exact>
                <HeldQuizes />
            </Route>
            <Route path="/admin/create" exact>
                <CreateQuiz />
            </Route>
            <Route path="/admin/question/create" exact>
                <CreateQuestion />
            </Route>
            <Route path="/admin/:id" exact>
                <QuestionsList />
            </Route>
            <Route path="/admin/question/:id" exact>
                <QuestionPage />
            </Route>




        </Switch>
    )
}
