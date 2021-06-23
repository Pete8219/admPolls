import React, {useState, useEffect} from 'react'
import { useHttp } from '../../../../hooks/http.hook'
import { AllQuizes } from './AllQuizes'



export const QuizesAdminList = () => {
    
    
    const { loading, request } = useHttp()
    
    localStorage.clear()

    const [quizes, setQuizes] = useState([])



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
                {!loading && quizes && <AllQuizes quizes = {quizes}/> }
            </>
        )
        
    

}