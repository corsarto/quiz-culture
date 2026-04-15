import { Link } from 'react-router-dom';
import type { EndScreenProps } from '../../types/index';
import './endscreen.scss';


export default function EndScreen({ score, selectedQuestions, quizEnded }: EndScreenProps) {
    if (!quizEnded) return null;
     const endMessage = `Quiz terminé! Votre score final est de ${score} / ${selectedQuestions}.`;
     const handleRestart = () => {
        localStorage.clear();
     };
    return (
        <div className='modal-overlay'>
            <div className='modal-end-screen'>
                {score >= selectedQuestions / 2 ? (
                    <p>Félicitations !</p>
                ) : (
                    <p>Essaie encore !</p>
                )}
                {quizEnded && <p className='endmsg'>{endMessage}</p>}
                {quizEnded && <Link to='/' >
                    <button onClick={handleRestart}>
                        Retour à l'acceuil
                    </button>
                </Link>}
            </div>
        </div>  
        
    )
}