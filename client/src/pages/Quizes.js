import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { QuizesList } from '../components/QuizesList'
import { useHistory } from 'react-router-dom'

export const Quizes = () => {
    const { loading, request } = useHttp()

    const [quizes, setQuizes] = useState()

    const history = useHistory()

    useEffect(() => {
        const fetchQuizes = async () => {
            try {
                const fetched = await request("/quizes", "GET", null, {})
                setQuizes(fetched)
            }catch(e) {}
        }
        fetchQuizes()

    }, [request])

    const clickHandler = (id, title) => {
        
        const data = {
            id,
            title
        }
        localStorage.setItem("QuizId", JSON.stringify(data))
        history.push("/quiz")
    }

    return (
        <>
            {!loading && quizes && <QuizesList quizes={quizes} clickHandler = {clickHandler}/>}
        </>
    )
}
