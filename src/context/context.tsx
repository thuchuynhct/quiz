import { createContext, useReducer } from "react";
import { reducer } from "./reducers";
import { QuestionOptionsType } from "./types";

const initialQuestion: QuestionOptionsType = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_question: 10,
    score: 0,
}

const AppContext = createContext<{ state: QuestionOptionsType, dispatch: React.Dispatch<any> }>({ state: initialQuestion, dispatch: () => null });

const AppProvider = function ({ children }: { children: JSX.Element }) {
    const [state, dispatch] = useReducer(reducer, initialQuestion);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext };
