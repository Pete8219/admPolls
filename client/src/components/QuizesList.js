import React from 'react'

export const QuizesList = ({quizes}) => {
    console.log(quizes)

    
    return (
        <div>
            {quizes.map(quiz => {
                return (
                    <h1>{quiz.title}</h1>
                )
            })}
        
        </div>
    )
}
