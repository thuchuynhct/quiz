import { apiType } from '../context/types'
import { useContext, useState } from 'react'
import { AppContext } from '../context/context';
import { IoIosArrowDown } from 'react-icons/io';

function SelectItem({ selectName, value, type }: { selectName: string, value: apiType[], type: string }) {
  const { dispatch } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);
  const [showValue, setShowValue] = useState(selectName);

  const itemClick = (e: any) => {
    dispatch({
      type: type, payload: e.target.id
    })
    setClicked(false);
    setShowValue(e.target.innerText)
  }
  return (
    <div onClick={() => setClicked(!clicked)} className='relative py-7 w-full flex justify-center items-center bg-white h-10 cursor-pointer shadow-md rounded-lg'>
      <div className='w-full font-normal text-xl pl-5'>
        {showValue}
        <div className={`${clicked ? "opacity-1 visible" : "opacity-0 invisible"} max-h-72 absolute 
                        w-full top-full mt-2 left-0 bg-white transition-all duration-300 ease-linear overflow-auto shadow-md rounded-lg z-10`}>
          {value.map(item => {
            return (<div onClick={itemClick} key={item.id} id={item.id} className='hover:bg-slate-200 px-6 py-1 text-lg'>{item.name}</div>)
          })}
        </div>
      </div>
      <IoIosArrowDown className={`-translate-x-5 text-xl ${clicked ? "rotate-180" : ""} transition-all duration-300`} />

    </div>
  )
}

export default SelectItem    