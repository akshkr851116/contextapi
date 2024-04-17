import React, { useContext } from 'react'
import { empcontext } from './Parent'
import SubChild2 from './SubChild2'
export default function Child2() {
    const emp = useContext(empcontext)
  return (
    <>
   <h2>This is the Child Component</h2>
   Name:<b>{emp.name}</b> <br/>
   Emp id:<b>{emp.id}</b>  <br/>
   Salary:<b>{emp.salary}</b>
   <hr/>
   <SubChild2/>  
    </>
  )
}
