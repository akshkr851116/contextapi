import React, {useState } from 'react'
import Childinc from './Childinc'
export var empcontext=React.createContext();
export default function Parentinc() {
    let [emp,empSet]=useState({name:"Akash",id:101,sal:25000})
  return (
    <>
    <h3>This is the parent Components</h3>
    My Sal:<b>{emp.sal}</b>
    <hr/>
    <empcontext.Provider value={{data:emp,updateEmp:empSet}}>
    <Childinc/>
    </empcontext.Provider>
     <hr/>
    </>
  )
}
