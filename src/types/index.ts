export type QuestionProps = {
    numberOfQuestions: number;
}

export type EndScreenProps = {
    score: number;
    numberOfQuestions: number;
    quizEnded: boolean;
}

export type QuizType = {
    id: string;
    question: string;
    answer: string;
    badAnswers: string[];
    category: string;
    difficulty: string;
}