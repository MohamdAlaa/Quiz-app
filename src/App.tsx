import React , {useState} from 'react';
import QuestionCard from './component/QuestionCard';
import { fetchQuizQuestions, QuestionState ,Difficulty } from './Api';




type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () =>{

  }

  const chechAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  
  }

  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Question ...</p>
         {/* <QuestionCard
           questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={chechAnswer}
          /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
