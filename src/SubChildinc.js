import React, { useContext } from 'react'
import { empcontext } from './Parentinc'

export default function SubChildinc() {
    let context=useContext(empcontext)
   let handleChange=()=>{
    let newSal=context.data.sal+context.data.sal*0.1;
    context.updateEmp({...context.data,sal:newSal})

    }

  return (
    <>
    <h3>This is the SubChild Components</h3>
    Name:<b>{context.data.name}</b><br/>
    Id:<b>{context.data.id}</b><br/>
    sal:<b>{context.data.sal}</b><br/>
    <button type='button' onClick={handleChange} >Inc Sal</button>

      
    </>
  )
}
