import { Link } from 'react-router-dom'
import './home.scss'
import { useQuery } from '@tanstack/react-query'
import type  { QuizType }  from '../../types';

export default function Home() {
    const fetchQuiz = async () => {
    const res = await fetch('https://quizzapi.jomoreschi.fr/api/v2/quiz');
    if (!res.ok) throw new Error('Erreur API');
    return res.json();
  };
   const { data } = useQuery({
    queryKey: ['quiz'],
    queryFn: fetchQuiz
});

    const allCategories: string[] = data
    ? Array.from(new Set (data.quizzes.map((q: QuizType) => q.category)))
    : [];

    const allDifficulties: string[] = data
    ? Array.from(new Set (data.quizzes.map((q: QuizType) => q.difficulty)))
    : [];

    return (
        <div>
            <h2>Bienvenue sur Quiz Culture !</h2>
            <div className='quiz-container'>
                <p>Veuillez séléctionner un quiz :</p>
                <div className='card-quiz'>
                    <Link to="/quiz/5">
                        <div className='quiz-option'>5 questions</div>
                    </Link>
                    <Link to="/quiz/10">
                        <div className='quiz-option'>10 questions</div>
                    </Link>
                    <Link to="/quiz/15">
                        <div className='quiz-option'>15 questions</div>
                    </Link>
                </div>
                <div className='categories-container'>
                    <p>Séléctionner une catégorie :</p>
                    <div className='categories-list'>
                        <ul className='category-option'>
                            {allCategories.map((category, i) => (
                                <li key={i}>{category}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='difficulties-container'>
                    <p>Séléctionner une difficulté : </p>
                    <div className='difficulties'>
                        <ul className='difficulty-option'>
                            {allDifficulties.map((difficulty, i) => (
                                <li key={i}>{difficulty}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    )
}