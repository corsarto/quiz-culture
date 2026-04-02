export type QuestionProps = {
    selectedQuestions: number;
    category: string;
    difficulty: string;
}

export type EndScreenProps = {
    score: number;
    selectedQuestions: number;
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