import React, {useState, useEffect} from 'react'
import { useHttp } from '../../../hooks/http.hook'


export const QuizesList = () => {
    const { loading, request } = useHttp()
    

    const [quizes, setQuizes] = useState([])


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
            <div>
                {quizes.map(quiz => {
                    return (
                        <h1 key={quiz._id}>{quiz.title}</h1>
                    )
                })}
            </div>
        )
        
    

}