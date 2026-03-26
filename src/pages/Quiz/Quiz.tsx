import Question from '../../components/Question/Question';
import { Navigate, useParams } from 'react-router-dom';


export default function Quiz() {
    const { numberOfQuestions } = useParams();
    const amount = Number(numberOfQuestions);
    
    if (isNaN(amount) || amount <= 0) {
        return <Navigate to='/404' />;
    }
    return(
        <div>
            <Question numberOfQuestions={amount}/>
        </div>
    )
}