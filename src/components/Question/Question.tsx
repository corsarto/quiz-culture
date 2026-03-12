import { useState } from 'react';
import { QuestionList } from '../../../data.json';
import './question.scss';
import EndScreen from '../../components/EndScreen/EndScreen';
import type { QuestionProps }  from '../../types/index';


export default function Question ({ numberOfQuestions }: QuestionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const question = QuestionList[currentIndex];
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const feedbackMessage = selectedAnswer === question.CorrectAnswer ? 'Bonne réponse!' : 'Mauvaise réponse.';
    const [isValidated, setIsValidated] = useState(false);
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);
    const maxIndex = numberOfQuestions - 1;
    
    return (
    <div className='question-container'>
      <div className='question-card'>
        <h2 className="question-text" >Question {question.QuestionId}: {question.Question}</h2>
      </div>
      <ul className={`answer-option`}>
        {question.Answer.map((answer, index) => (
          <li key={index}
              className={
                isValidated 
                ? answer === question.CorrectAnswer
                ? 'validated' 
                : (selectedAnswer === answer ? 'invalidated' : '') 
                : (selectedAnswer === answer ? 'selected' : '') 
              }
              onClick={() => !isValidated && setSelectedAnswer(answer)}>
            <label>
              <input 
                type="radio" 
                name="answer" 
                value={answer}
                checked={selectedAnswer === answer}
                readOnly
              />
              {answer} 
            </label>
            </li>
        ))}
      </ul>
      <div className='btn-container'>
        <button className={`next-question-btn ${currentIndex >= maxIndex ? 'disabled-btn' : ''}`} onClick={() => {
          if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer('');
            setIsValidated(false);
          } 
        }} disabled={currentIndex >= maxIndex} 
        >Next Question</button>
        <button className='validate-btn' onClick={() => { 
          setIsValidated(true);
          if (selectedAnswer === question.CorrectAnswer) {
          setScore(score + 1);
          }
          if (currentIndex >= maxIndex) {
            setQuizEnded(true);
          }
        }} disabled={isValidated}>Valider</button>
      </div>
      <div className='container-msg'>
        {isValidated && <p className='feedbackmsg'>{feedbackMessage}</p>}
        {quizEnded || <p className='scoremsg'>Score: {score} / {numberOfQuestions} </p>}
      </div>
      {quizEnded && <EndScreen score={score} numberOfQuestions={numberOfQuestions} quizEnded={quizEnded}/>}
    </div>
  )
}