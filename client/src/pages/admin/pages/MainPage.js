import React, {useState, useEffect} from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { useHistory } from 'react-router-dom'
import { QuizesList } from '../components/QuizesList'

export const MainPage = ()=> {
    
    const { loading, request } = useHttp()
    const [quizes, setQuizes] = useState()


    useEffect(() => {
        const fetchQuizes = async () => {
            try {
                const fetched = await request("/quizes", "GET", null, {})
                setQuizes(fetched)
            } catch (error) {
                
            }

        }
        fetchQuizes()
    },[])

    return (
        <>
            { !loading && quizes && <QuizesList data = {quizes}/>}
        </>
    )



}