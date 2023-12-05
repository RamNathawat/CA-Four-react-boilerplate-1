import React, { useState ,useEffect , createContext} from 'react'
import questions from '../questions'
import Result from './Result'

export const marks=createContext()

export default function QuestionBox() {
  let [questionNo,setquestionNo]=useState(1)
  let [count,setcount]=useState(1)
  let [score,setscore]=useState(0)
  let blue='#6066FF'
  let [highlight,sethighlight]=useState('blue')
  
  function counts(item){
    setcount(count+1)
    setquestionNo(questionNo+1)
    if(item.isCorrect==true){  
      setscore(score+1)
      console.log(questionNo);
    }
  }
  
  function removehighlight(){
    sethighlight(blue)
    
  }

  function highlights(){
    let red="#CF5252"
    sethighlight(red)
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
