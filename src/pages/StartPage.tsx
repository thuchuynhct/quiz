import SelectItem from '../components/SelectItem';
import { useNavigate } from 'react-router-dom';
import useAxios from '../api/useAxios';
import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  apiType
} from '../context/types';
import Form from "../components/Form"
import { useContext } from 'react';
import { AppContext } from '../context/context';

function StartPage() {
  const { state } = useContext(AppContext);
  const { response, error, loading } = useAxios("/api_category.php");
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Cannot connect to server!</h1>
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];


  const submitHandler = (e: any) => {
    e.preventDefault();
    if (state.question_category && state.question_difficulty && state.question_type) {
      navigate('/question');
    }
    else alert("Please select an option below!")
  }

  return (
    <Form onSubmit={submitHandler} btnText="Let's Quiz">
      <>
        <h1 className='font-bold text-[46px] tracking-wide'>QUIZ APP</h1>
        <SelectItem selectName='Select Category' value={response.trivia_categories as apiType[]} type={CHANGE_CATEGORY} />
        <SelectItem selectName='Select Type Of Question' value={typeOptions} type={CHANGE_TYPE} />
        <SelectItem selectName='Select Difficulty' value={difficultyOptions} type={CHANGE_DIFFICULTY} />
      </>
    </Form>
  )
}

export default StartPage
