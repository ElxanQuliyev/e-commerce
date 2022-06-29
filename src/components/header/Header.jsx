import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from '../../redux/action/DarkMode';


const Header = () => {
    const dispatch=useDispatch();
    const test=useSelector(s=>s.productInfo);
    console.log(test)
  return (
    <div>
      <h4>Logo</h4>
      <p>{test.salam && test.salam.name}</p>
      <button onClick={()=>dispatch(changeMode("white"))}>White</button>
      <button onClick={()=>dispatch(changeMode("black"))}>Dark</button>

    </div>
  )
}

export default Header