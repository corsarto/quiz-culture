import { Link } from 'react-router-dom';
import type { EndScreenProps } from '../../types/index';
import './endscreen.scss';


export default function EndScreen({ score, numberOfQuestions, quizEnded }: EndScreenProps) {
    if (!quizEnded) return null;
     const endMessage = `Quiz terminé! Votre score final est de ${score} / ${numberOfQuestions}.`;
    return (
        <div className='modal-overlay'>
            <div className='modal-end-screen'>
                {score >= numberOfQuestions / 2 ? (
                    <p>Félicitations !</p>
                ) : (
                    <p>Essaie encore !</p>
                )}
                {quizEnded && <p className='endmsg'>{endMessage}</p>}
                {quizEnded && <Link to='/' ><button>Retour à l'acceuil</button></Link>}
            </div>
        </div>  
        
    )
}