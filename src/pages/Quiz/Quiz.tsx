import Question from '../../components/Question/Question';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';


export default function Quiz() {
    const { selectedQuestions } = useParams();
    const amount = Number(selectedQuestions);

    const [searchParams] = useSearchParams();

    const categoryChosen = searchParams.get('category') || 'all';
    const difficultyChosen = searchParams.get('difficulty') || 'all';
    
    if (isNaN(amount) || amount <= 0) {
        return <Navigate to='/404' />;
    }
    
    return(
        <div>
            <Question 
                selectedQuestions={amount} 
                category={categoryChosen} 
                difficulty={difficultyChosen}
            />
        </div>
    )
}