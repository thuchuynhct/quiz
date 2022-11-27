import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_SCORE,
    QuestionOptionsType,
    RESET,
} from "./types"

export const reducer = function (state: QuestionOptionsType, action: any): QuestionOptionsType {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return { ...state, question_category: action.payload }

        case CHANGE_DIFFICULTY:
            return { ...state, question_difficulty: action.payload }

        case CHANGE_TYPE:
            return { ...state, question_type: action.payload }

        case CHANGE_SCORE:
            return { ...state, score: Number(action.payload) }

        case RESET:
            return {
                question_category: "",
                question_difficulty: "",
                question_type: "",
                amount_of_question: 10,
                score: 0,
            }
            
        default:
            return state;
    }
}