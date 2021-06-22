import React, { useState, useEffect} from 'react'
import { useHttp } from '../../../../hooks/http.hook' 
import { useHistory }   from 'react-router-dom'
import { HeaderPage } from '../../../../components/HeaderPage'
import { Navbar } from '../../../../components/Navbar'
import { SelectedQuiz } from '../../components/quizes/SelectedQuiz'




export const SelectedQuizPage = () => {
    const history = useHistory()
    const {loading, request} = useHttp()
    const id = localStorage.getItem('SelectedQuiz')
    
    if(!id) {
        history.push("/")
    }

    const [quiz, setQuiz]           = useState()
    const [questions, setQuestions] = useState() 
    const [count, setCount]         = useState(1)

    useEffect(() => {
        const fetchQuiz = async() => {
            const fetched = await request(`/quizes/${id}`, "GET", null, {})
            setQuiz(fetched)
        }
        fetchQuiz()
    }, [id, request])

    useEffect(() => {
        const fetchQuestions = async() => {
            const fetched = await request(`/questions/byQuize/${id}`, "GET", null, {})
            setQuestions(fetched)

        }
        fetchQuestions()

    }, [id, request])


    return (
        <>
                    <div className="container">
                        <HeaderPage />
                        <Navbar />
                        {!loading && quiz && questions && <SelectedQuiz props={{quiz, questions}} />}
           
                    </div>
        </>
    )
}
