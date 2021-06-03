import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AnswerLoader } from '../components/Loader'
import { HeaderPage } from './HeaderPage'
import { Navbar } from './Navbar'


export const Quiz = ({ data, title, current, score, clickHandler }) => {
    
    
    return (
        
        <div className="container">
            <HeaderPage />
            <Navbar />
            <Header as ='h1' style={{color:"#fff", marginBottom: "2em"}}>Опрос на тему : {title}</Header>
            {  !score  
                ? <AnswerLoader/>
                : ( current === data.length
                    ? <div className = "answers__body">
                                <Header as = 'h3' style={{color:"#fff"}}>Спасибо, что приняли участие в опросе </Header><br/>                                
                                <Button color="green">
                                    
                                    <Link to ="/">
                                        <span style={{color:"#fff"}}>На главную</span>
    
                                        </Link>
                                    </Button>
                            </div>
                         : 
                            <div className = "answers__body">
                        
                            
                            <Header as='h3' style={{color:"#fff"}}>Вопрос <span className="answer__number" style={{fontSize:"1.5em"}}>{current +1}</span> из {data.length}. {data[current].title}</Header>
                                <div className="answers" style={{width:"100%"}}>
                                    <ul>
                                    {data[current].answers.map((item, index) => {
                                        return(
                                            <li key={index} onClick ={ (e) => clickHandler(data[current]._id, item.grade, e)}>{item.answer}</li>
                                        )
                                    })}
                                    </ul>
                                  
                                    
                                </div>
                            
                        </div>    
                        
                ) 
                        
                
                
                
                }
                
            
                    
                
                
            

        </div>
    )
}