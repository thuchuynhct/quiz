import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from "../components/Form"
import { AppContext } from '../context/context'
import { RESET } from '../context/types'

function ScorePage() {
  const { state } = useContext(AppContext);
  const navigation = useNavigate();
  const { dispatch } = useContext(AppContext);

  const playAgain = (e: any) => {
    e.preventDefault();
    dispatch({
      type: RESET
    });
    navigation("/quiz");
  }
  return (
    <Form onSubmit={playAgain} btnText="Play Again">
      <>
        <h2 className='sm:text-4xl text-5xl font-bold text-orange-400'>Congratulations!</h2>
        <p className='sm:text-3xl sm:mb-0 text-4xl font-bold text-red-600 mb-6'>Your Score: <span className=' text-blue-500'>{state.score}/10</span></p>
      </>
    </Form>
  )
}

export default ScorePage