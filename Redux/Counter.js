import React from 'react'
import "./Counter.css"
import {useSelector,useDispatch} from 'react-redux'
import { increment, decrement, reset } from './Actions';
function Counter() {
   const counter = useSelector(state => state.counter)
   const dispatch=useDispatch();
   return (
      <div className="container">
         <div>
         <h1>Counter:{ counter}</h1>
         <button className="btn btn-primary" onClick={()=>dispatch(increment())}>Plus </button>
         <button className="btn btn-secondary" onClick={()=>dispatch(decrement())}>Minus</button>
         <button className="btn btn-danger" onClick={()=>dispatch(reset())}>Store Result</button>
      </div>
      <div >Result of the Operation is:{counter}</div>
      </div>
   )
}

export default Counter
