import React, { useContext } from 'react'
// import SubChild2 from './SubChild2'
// import { empcontext } from './Parent'
// import SubChild from './SubChild'


export default function Child() {
    const emp =useContext(empcontext)
  return (
    <>
    <h3>This is the Child components</h3>
    Employee ID:{emp.id}<br/>
    Emp Name:{emp.name}<br/>
    Emp Salary:{emp.salary}
    <hr/>
    {/* <SubChild2/> */}
    {/* <SubChild/> */}
      
    </>
  )
}
