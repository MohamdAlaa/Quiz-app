import React from 'react';
import QuestionCard from './component/QuestionCard';

// https://opentdb.com/api.php?amount=10&type=multiple
function App() {

  const startTrivia = async () =>{


  }

 // const chechAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {


 // }

  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Question ...</p>
      
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
