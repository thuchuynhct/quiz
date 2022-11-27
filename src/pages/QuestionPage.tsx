import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxios from '../api/useAxios';
import { AppContext } from '../context/context';
import { QuestionType, CHANGE_SCORE } from '../context/types';
import Form from "../components/Form"
import { decode } from 'html-entities';

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function QuestionPage() {
  const { state, dispatch } = useContext(AppContext);
  const navigation = useNavigate();


  useEffect(() => {
    if (!state.question_category) {
      navigation("/");
      return;
    }
  }, [state.question_category])

  const apiUrl = `/api.php?category=${state.question_category}&difficulty=${state.question_difficulty}&type=${state.question_type}&amount=${state.amount_of_question}`;
  const { response, loading } = useAxios(apiUrl);

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setquestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    if (response?.results.length) {
      setquestions(response.results as QuestionType[]);
    }
  }, [response, questionIndex])

  if (loading || questions.length == 0) {
    return <h1>Loading</h1>
  }
  const submitHandler = (e: any) => {
    e.preventDefault();

    const correctAnswer = questions[questionIndex].correct_answer;
    const anwserNum = [0, 1, 2, 3].find(s => s < e.target.length && e.target[s].checked);

    if (anwserNum === undefined) {
      alert("Please select one!");
      return;
    }

    if (e.target[anwserNum].value === correctAnswer) {
      dispatch({
        type: CHANGE_SCORE, payload: state.score + 1
      })
    }

    if (questionIndex < state.amount_of_question - 1) {
      setQuestionIndex(questionIndex + 1);
    }
    else {
      navigation("/score");
    }
  }
  return (
    <Form onSubmit={submitHandler} >
      <>
        <h1 className='mb-2 w-full font-medium text-2xl'>{`Question ${questionIndex + 1}/${state.amount_of_question}: ${decode(questions[questionIndex].question)}`}</h1 >
        {
          shuffleArray([...questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer])
            .map((item, index) => {
              return (
                <label className='text-xl w-full cursor-pointer' key={index}>
                  <input className='mr-2 cursor-pointer' name="quiz" type="radio" value={item} />
                  {decode(item)}
                </label>
              )
            })
        }
      </>
    </Form >
  )
}

export default QuestionPage