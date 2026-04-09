import './home.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = [
        {label: 'Toutes catégories', value: 'all'},
        {label: 'Sport', value: 'sport'},
        {label: 'Histoire', value: 'histoire'},
        {label: 'Géographie', value: 'geographie'},
        {label: 'Science', value: 'science'}, 
        {label: 'Musique', value: 'musique'},
        {label: 'TV et cinéma', value: 'tv_cinema'},
        {label: 'Culture générale', value: 'culture_generale'},
        {label: 'Art et littérature', value: 'art_litterature'},
        {label: 'Gastronomie', value: 'gastronomie'},
        {label: 'Actu politique', value: 'actu_politique'}, 
        {label: 'Jeux vidéos', value: 'jeux_videos'},
    ];

    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const difficulties = [
        {label: 'Toutes difficultés', value: 'all'},
        {label: 'Facile', value: 'facile'},
        {label: 'Moyen', value: 'normal'},
        {label: 'Difficile', value: 'difficile'},
    ];
    
    const [selectedQuestions, setSelectedQuestions] = useState<number>(0);
    const questionsOptions = [5, 10, 15];
    

    const navigate = useNavigate();

    return (
        <div>
            <h2>Bienvenue sur GQuiz !</h2>
            <div className='quiz-container'>
                <h3>Veuillez séléctionner un quiz </h3>
                <div className='choice-container'>
                    <div className='questions-container'>
                        <p>Séléctionner le nombre de questions :</p>
                        <ul className='questions-container-card'>
                            {questionsOptions.map((q, i) => (
                                <li 
                                    key={i}
                                    className={`question-card-home ${selectedQuestions === q ? 'selected' : ''}`}
                                >
                                    <label>
                                        <input 
                                            type='radio'
                                            name='question-card-home'
                                            value={q}
                                            checked={selectedQuestions === q}
                                            onChange={() => setSelectedQuestions(q)}
                                        />
                                        {q} questions
                                    </label>
                                </li>   
                            ))}
                        </ul>
                    </div>
                    <div className='difficulties-container'>
                        <p>Séléctionner une difficulté : </p>
                        <ul className='difficulty-container'>
                            {difficulties.map((difficulty, i) => (
                                <li key={i}
                                    className={`difficulty-card-home ${selectedDifficulty === difficulty.value ? 'selected' : ''}`}>
                                    <label>
                                        <input 
                                            type='radio'
                                            name='difficulty'
                                            value={difficulty.value}
                                            checked={selectedDifficulty === difficulty.value}
                                            onChange= {() => setSelectedDifficulty(difficulty.value)}
                                        />
                                        {difficulty.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='categories-container'>
                        <p>Séléctionner une catégorie :</p>
                        <ul className='category-container'>
                            {categories.map((category, i) => (
                                <li key={i}
                                    className={`category-card-home ${selectedCategory === category.value ? 'selected' : ''}`}>
                                    <label>
                                        <input 
                                            type='radio'
                                            name='category'
                                            value={category.value}
                                            checked={selectedCategory === category.value}
                                            onChange= {() => setSelectedCategory(category.value)}
                                        />
                                        {category.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                        <button
                            disabled={!selectedQuestions || !selectedCategory || !selectedDifficulty}
                            onClick={() => navigate(`/quiz/${selectedQuestions}?category=${selectedCategory}&difficulty=${selectedDifficulty}`)}
                        >
                            Lancer le quiz
                        </button>
                    </div>
                </div>
        </div>    
    )
}

