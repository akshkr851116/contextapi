import React, { useContext } from 'react'
import {createContext} from './Prarentusereducer'
import Childlast from './Childlast'

export default function Childred1() {
    let {props1,props2}=useContext(createContext)
  return (
    <>
    <h3>This is the ChildLast Components</h3>
    <h3>count:{props1}</h3>
    <button onClick={()=>props2({type:"INC"})}>Increment</button>
    <button onClick={()=>props2({type:"DEC"})}>Decrement</button>
    <hr/>
    <Childlast/>     
      
    </>
  )
}
