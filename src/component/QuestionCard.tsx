import React from 'react'

  type Props = {
    question: number;
    answer: string [];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestion: number 
  }

 const QuestionCard:React.FC<Props> = ({ question, answer, callback, userAnswer, questionNr, totalQuestion}) => {
  return (
    <div>Question Card</div>
  )
}
export default QuestionCard;