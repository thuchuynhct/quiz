export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const CHANGE_DIFFICULTY = "CHANGE_DIFFICULTY";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CHANGE_SCORE = "CHANGE_SCORE";
export const RESET = "RESET";

export type QuestionOptionsType = {
    question_category: string,
    question_difficulty: string,
    question_type: string,
    amount_of_question: number,
    score: number,
}

export type apiType = {
    id: string,
    name: string
}

export type QuestionType = {
    category: string,
    type: string, 
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}