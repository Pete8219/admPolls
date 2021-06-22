import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../../../../hooks/http.hook'
import { Quizes } from '../../components/quizes/Quizes'


export const QuizesPage = () => {
    const history                   = useHistory()
    const { loading, request }      = useHttp()
    const [allQuizes, setAllQuizes] = useState([])

    useEffect(() => {
        const fetchAllQuizes = async() => {
            try {
                const fetched = await request('/quizes', "GET", null, {})
                setAllQuizes(fetched)
            } catch (error) {
                
            }
        }
        fetchAllQuizes()
    }, [request])

    
    const clickHandler = (id) => {
        localStorage.setItem('SelectedQuiz', id)
        history.push("/quiz")
    }


    return (
        <>
            
            {!loading && allQuizes && <Quizes props = {allQuizes} clickHandler={clickHandler}/>}
        </>
    )
}