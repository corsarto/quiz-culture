import { Link } from 'react-router-dom'
import './home.scss'

export default function Home() {
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
            </div>
        </div>    
    )
}