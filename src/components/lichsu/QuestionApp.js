import React, { useState } from "react";

export default function QuestionApp(){
    const [showFinalResults, setShowFinalResults]=useState(false);
    const [score, setScore]=useState(0);
    const [currentQuestion, setCurrentQuestion]=useState(0);
    

    const questions=[
        {
            text:"What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
            options:[
                {id:0,text:"7-1",isCorrect:true},
                {id:1,text:"0 - 1",isCorrect:false},
                {id:2,text:"3 - 4",isCorrect:false},
                {id:3,text:"16 - 0",isCorrect:false},
            ]
        },
        {
            text:"Which city did the former NHL team &quot;The Nordiques&quot; originiate from?",
            options:[
                {id:0,text:"Houston",isCorrect:false},
                {id:1,text:"Quebec City",isCorrect:true},
                {id:2,text:"Montreal",isCorrect:false},
                {id:3,text:"New York",isCorrect:false},
            ]
        },
        {
            text:"What team won the 2016 MLS Cup?",
            options:[
                {id:0,text:"Colorado Rapids",isCorrect:false},
                {id:1,text:"Toronto FC",isCorrect:false},
                {id:2,text:"Seattle Sounders",isCorrect:true},
                {id:3,text:"Montreal Impact",isCorrect:false},
            ]
        },
        {
            text:"Which team has won the most Stanley Cups in the NHL?",
            options:[
                {id:0,text:"Chicago Blackhawks",isCorrect:false},
                {id:1,text:"Toronto Maple Leafs",isCorrect:false},
                {id:2,text:"Montreal Canadians",isCorrect:true},
                {id:3,text:"Detroit Red Wings",isCorrect:false},
            ]
        },
        {
            text:"In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
            options:[
                {id:0,text:"1-7",isCorrect:true},
                {id:1,text:"1-5",isCorrect:false},
                {id:2,text:"1-6",isCorrect:false},
                {id:3,text:"2-6",isCorrect:false},
            ]
        },
    ];

    const optionClicked=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1)
        }

        if(currentQuestion+1 <questions.length){
            setCurrentQuestion(currentQuestion+1)
        }
        else{
            setShowFinalResults(true)
        }
        
    }
    
    const startGame=()=>{
        setShowFinalResults(false);
        setScore(0);
        setCurrentQuestion(0);
    }
    

    return(
       <div className="App">
           
          <h1>test foot ball</h1>

          <h2>số câu :{score} đúng</h2>

          {showFinalResults ? <div className="final-results">
               <h2>đúng {score} trong {questions.length} câu ({(score/questions.length)*10}đ)</h2>
               <button onClick={startGame}>bắt đầu</button>
          </div>:<div className="question-core" >
              <h2>{currentQuestion+1} trong số {questions.length} câu</h2>
              <h3 className="question-text">{questions[currentQuestion].text}</h3>

              <ul>
                  {questions[currentQuestion].options.map(option=>{
                      return(
                          <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                      )
                  })}
              </ul>
          </div>}
          
          
       </div>
    )
}