import { useState,  useEffect } from 'react';
import './question.scss';
import EndScreen from '../../components/EndScreen/EndScreen';
import type { QuestionProps }  from '../../types/index';
import { useQuery } from '@tanstack/react-query'

const fetchQuiz = async (selectedQuestions: number, category: string, difficulty: string) => {
  const categoryParam = category === 'all' ? '' : category;
  const difficultyParam = difficulty === 'all' ? '' : difficulty;

  const url = `https://quizzapi.jomoreschi.fr/api/v2/quiz?limit=${selectedQuestions}&category=${categoryParam}&difficulty=${difficultyParam}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Erreur API');
  return res.json();
  };

export default function Question ({ selectedQuestions, category, difficulty }: QuestionProps) {
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['quiz', selectedQuestions, category, difficulty],
    queryFn: () => fetchQuiz(selectedQuestions, category, difficulty),
  });

  const [isValidated, setIsValidated] = useState(false);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const quiz = data?.quizzes[currentIndex];
  
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (!quiz) return;

    const shuffleAnswers = (answers: string[]) => {
      const shuffled = [...answers];
      for (let i = shuffled.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled;
    };
    queueMicrotask(() =>setShuffledAnswers(shuffleAnswers([quiz.answer, ...quiz.badAnswers])));
  }, [quiz]);

  if (isLoading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error.message}</p>
  
  const feedbackMessage = selectedAnswer === quiz.answer ? 'Bonne réponse!' : 'Mauvaise réponse.';
  const maxIndex = Math.min(selectedQuestions, data.quizzes.length) -1;
  
    return (
    <div className='question-container'>
      <div className='question-card'>
        <h2 className='question-text' >Question: {quiz.question}</h2>
      </div>
      <p>Difficulté: {quiz.difficulty}</p>
      <p>Catégories: {quiz.category}</p>
      <ul className={`answer-option`}>
        {shuffledAnswers.map((answer, i) => (
          <li key={i}
              className={
                isValidated 
                ? answer === quiz.answer
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
        >
          Next Question
        </button>
        <button className='validate-btn' onClick={() => { 
          setIsValidated(true);
          if (selectedAnswer === quiz.answer) {
          setScore(score + 1);
          }
          if (currentIndex >= maxIndex) {
            setQuizEnded(true);
          }
        }} disabled={isValidated}>
          Valider
        </button>
      </div>
      <div className='container-msg'>
        {isValidated && <p className='feedbackmsg'>{feedbackMessage}</p>}
        {quizEnded || <p className='scoremsg'>Score: {score} / {selectedQuestions} </p>}
      </div>
        {quizEnded && <EndScreen score={score} selectedQuestions={selectedQuestions} quizEnded={quizEnded}/>}
      </div>
  )
}