import React, {useState, useEffect} from 'react'
import { useHttp } from '../../../../hooks/http.hook'
import { AllQuizes } from './AllQuizes'
import { useParams } from 'react-router-dom'


export const QuizesAdminList = () => {
    console.log(useParams)
    
    const { loading, request } = useHttp()
    
    localStorage.clear()

    const [quizes, setQuizes] = useState([])
    const [status, setStatus] = useState({
        show: 'All'
    })


    useEffect(() => {
        const fetchQuizes = async () => {
            try {
                const fetched = await request("/quizes", "GET", null, {})
                setQuizes(fetched)
            } catch (error) {}

        }
        fetchQuizes()
    },[request])


    

        return (
            <>
                {!loading && quizes && <AllQuizes quizes = {quizes} filter={status}/> }
            </>
        )
        
    

}