import Question from '../../components/Question/Question';
import { Navigate, useParams } from 'react-router-dom';
import { QuestionList } from '../../../data.json';

export default function Quiz() {
    const { numberOfQuestions } = useParams();
    const requestAmount = Number(numberOfQuestions);
    const maxQuestions = QuestionList.length;
    const amount = Math.min(requestAmount, maxQuestions);
    
    if (isNaN(amount) || amount <= 0) {
        return <Navigate to='/404' />;
    }
    return(
        <div>
            <Question numberOfQuestions={amount}/>
        </div>
    )
}