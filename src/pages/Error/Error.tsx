import { Link } from 'react-router-dom'
import './error.scss'

export default function Error() {
    return (
        <div className='error-container'>
            <div className='error-card'>
                <h2>Error 404</h2>
                <p>La page que vous cherchez n'existe pas.</p>
                <Link to="/">
                    <button className='btn-return'>Retour à la page d'acceuil</button>
                </Link>
            </div>
        </div>
    )
}