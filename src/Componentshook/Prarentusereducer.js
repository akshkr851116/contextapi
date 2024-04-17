import React, { useReducer } from 'react'
import Reducer from './Reducer'
import Childred1 from './Childred1'
export var createContext =React.createContext()
export default function Prarentusereducer() {
    let [counter,countDispatch]=useReducer(Reducer,{count:1})
  return (
    <>
        <h3>This is the parent components</h3>
        <h3>count:{counter.count}</h3>
        <button onClick={()=>countDispatch({type:"INC"})}>Increment</button>
        <button onClick={()=>countDispatch({type:"DEC"})}>Decrement</button>
        <hr/>
        <createContext.Provider value={{props1:counter.count,props2:countDispatch}} ><Childred1/></createContext.Provider>
    </>
  )
}
