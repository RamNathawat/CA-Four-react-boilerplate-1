import React, { useState ,useEffect , createContext} from 'react'
import questions from '../questions'
import Result from './Result'

export const marks=createContext()

export default function QuestionBox() {
  let [questionNo,setquestionNo]=useState(1)
  let [count,setcount]=useState(1)
  let [score,setscore]=useState(0)
  let grey="#555555"
  let [highlight,sethighlight]=useState(grey)
  
  function counts(item){
    setcount(count+1)
    setquestionNo(questionNo+1)
    if(item.isCorrect==true){  
      setscore(score+1)
      console.log(questionNo);
    }
  }
  
  function removehighlight(){
    let grey="#555555"
    sethighlight(grey)
    
  }

  function highlights(){
    let blue='#3498db'
    sethighlight(blue)
  }

  useEffect(() => {
    console.log(questionNo);
  }, [questionNo]);


  return (
      <>
      {questionNo!=6?
      <>
      <h1>Question : {questionNo} out of 5</h1>
        <h2 style={{color: highlight}}>{questions[questionNo-1].text}</h2>
        <div>
          {questions[questionNo-1].options.map((item)=>{
            return(<div className='option' key={item.id} onClick={()=>counts(item)}>{item.text}</div>)
          })}
        </div>
        <div className='hlbox'>
          <button onClick={highlights} className='highlight'>Highlight</button>
          <button onClick={removehighlight} className='removehighlight'>Remove highlight</button>
        </div>
        </>
        :
          <>
          <marks.Provider value={score}>
          <Result/>
        </marks.Provider>
          </>
        }
        
        
      </>
  )
}
