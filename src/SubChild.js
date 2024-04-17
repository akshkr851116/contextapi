import React from 'react'
import { empcontext } from './Parent'
export default function SubChild() {
  return (
    <>
    <h3>This is the SubChild components</h3><hr/>
    <empcontext.Consumer>
        {(data)=>{
            return(<>

<h2>Name:{data.Name}</h2><br/>
<h2>ID:{data.id}</h2><br/>
<h2>Salary:{data.salary}</h2><br/>
          </>)
        }}

    </empcontext.Consumer>
    
      
    </>
  )
}
