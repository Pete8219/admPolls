import React from 'react'
import { Switch, Route} from "react-router-dom"
import { QuizesList } from './components/QuizesList'
import { QuizListActive, QuizListActivePage } from './Quizes/QuizListActivePage'
import {  HeldQuizesPage } from './Quizes/HeldQuizesPage'
import { CreateQuizPage } from './Quizes/CreateQuizPage'
import { QuestionsListPage } from './Questions/QuestionsListPage'
import { QuestionEditPage } from './Questions/QuestionEditPage'
import { QuestionCreatePage } from './Questions/QuestionCreatePage'






export const useRoutes = () => {
    return (
        <Switch>

            <Route path="/admin" exact>
                <QuizesList />
            </Route>
            <Route path="/admin/active" exact>
                <QuizListActivePage />
            </Route>
            <Route path="/admin/held" exact>
                <HeldQuizesPage />
            </Route>
            <Route path="/admin/create" exact>
                <CreateQuizPage />
            </Route>
            <Route path="/admin/question/create" exact>
                <QuestionCreatePage />
            </Route>
            <Route path="/admin/:id" exact>
                <QuestionsListPage />
            </Route>
            <Route path="/admin/question/:id" exact>
                <QuestionEditPage />
            </Route>




        </Switch>
    )
}
