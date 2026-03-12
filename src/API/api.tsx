import { useEffect, useState } from "react";
import type { QuizType } from "../types";

export default function Data() {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);

  const url = "https://quizzapi.jomoreschi.fr/api/v2/quiz";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setQuizzes(response.quizzes);
      });
  }, []);
    
 return (
  <div>
    {(() => {
      const testID = 'cmguy15sn000fhzuqu8hnbru5';
      const quizz = quizzes.find(q => q.id === testID);

      if (!quizz) return <p>Question introuvable</p>;

      const allAnswer = [quizz.answer, ...quizz.badAnswers];

      return (
        <div key={quizz.id}>
          <h3>{quizz.category}</h3>
          <h4>{quizz.difficulty}</h4>
          <p>{quizz.question}</p>
          <ul>
            {allAnswer.sort(( )=> Math.random() - 0.5).map((answer, i) => (
              <li key={i}>{answer}</li>
            ))}
          </ul>
        </div>
      );
    })()}
  </div>
);
}
