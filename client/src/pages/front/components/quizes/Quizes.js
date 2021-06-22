import React from 'react'
import { Card } from 'semantic-ui-react'
//import { Link } from 'react-router-dom'
import { HeaderPage } from '../../../../components/HeaderPage'
import { Navbar } from '../../../../components/Navbar'
import { Quiz } from './Quiz'

export const Quizes = ({ props, clickHandler }) => {
    
    const activeQuizes = props.filter(item => item.isActive === true)


    return (
        <>
            

            <div className="container">
             <HeaderPage />
             <Navbar />
             <Card.Group itemsPerRow={2}>
             {activeQuizes.map(quiz => 
                
                <Quiz key={quiz._id}
                    props={quiz}
                    clickHandler={clickHandler}
                />
                
            )}
            </Card.Group>
         </div>
        </>
    )

}