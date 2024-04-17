import React, { useContext } from 'react'
import SubChildinc from './SubChildinc'
import { empcontext } from './Parentinc'
export default function Childinc() {
    let context =useContext(empcontext)
    

  return (
    <>
        <h3>This is the Child Components</h3>
        sal:<b>{context.data.sal}</b>
        <hr/>
        <SubChildinc/>

      
    </>
  )
}
