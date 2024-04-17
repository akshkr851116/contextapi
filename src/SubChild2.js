import React, { useContext } from 'react'
import { empcontext } from './Parent'
export default function SubChild2() {
    const emp=useContext(empcontext)
   
  return (
    <>
    
    <h3>This is the subChild Components using useContext()Hook </h3>
   Emp Name:<b>{emp.name}</b><br/>
   Emp Id:<b>{emp.id}</b><br/>
   Emp Salary:<b>{emp.salary}</b><br/>






    
      
    </>
  )
}
