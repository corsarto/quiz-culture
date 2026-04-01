import { Link } from 'react-router-dom'
import './home.scss'
import { useState } from 'react';

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
    
    const [selectedQuestions, setSelectedQuestions] = useState('');

    return (
        <div>
            <h2>Bienvenue sur Quiz Culture !</h2>
            <div className='quiz-container'>
                <h3>Veuillez séléctionner un quiz </h3>
                <div className='questions-container'>
                    <p>Séléctionner le nombre de questions :</p>
                    <select 
                    value={selectedQuestions} 
                    onChange={(e) => setSelectedQuestions(e.target.value)}>
                        <option value="">--Choisir le nombre de questions--</option>
                        <option value="5">5 questions</option>
                        <option value="10">10 questions</option>
                        <option value="15">15 questions</option>
                    </select>
                </div>
                <div className='categories-container'>
                    <p>Séléctionner une catégorie :</p>
                    <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">--Choisir une catégorie--</option>
                        {categories.map((category, i) => (
                            <option key={i} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='difficulties-container'>
                    <p>Séléctionner une difficulté : </p>
                    <select 
                    value={selectedDifficulty} 
                    onChange={(e) => setSelectedDifficulty(e.target.value)}>
                        <option value="">--Choisir une difficulté--</option>
                        {difficulties.map((difficulty, i) => (
                            <option key={i} value={difficulty.value}>
                                {difficulty.label}
                            </option>
                        ))}
                    </select>
                </div>
                <Link to={`/quiz/${selectedQuestions}?category=${selectedCategory}&difficulty=${selectedDifficulty}`}>
                    <button>Lancer le quiz</button>
                </Link>
            </div>
        </div>    
    )
}