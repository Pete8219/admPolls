import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { QuizesList } from '../components/QuizesList'

export const Quizes = () => {
    const { loading, request } = useHttp()

    const [quizes, setQuizes] = useState()

    useEffect(() => {
        const fetchQuizes = async () => {
            try {
                const fetched = await request("/quizes", "GET", null, {})
                setQuizes(fetched)
            }catch(e) {}
        }
        fetchQuizes()

    }, [request])

    return (
        <>
            {quizes && <QuizesList quizes={quizes}/>}
        </>
    )
}
