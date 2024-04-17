import React, { useState } from 'react'
import Child2 from './Child2'

export var empcontext=React.createContext()
export default function Parent() {
  let [emp,setEmp]=useState({name:"Akash Singh",id:101,salary:500})
 
  return (
    <>
    <h3>This is the parent components</h3>
    Employee salary:{emp.salary}<hr/>
    <empcontext.Provider value={emp}><Child2/></empcontext.Provider>   
   

    </>
  )
}
