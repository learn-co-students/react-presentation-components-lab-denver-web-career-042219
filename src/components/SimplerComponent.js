// Code SimplerComponent Here
import React from 'react'

// const SimplerComponent  = () => {
//   return <div> I am just happy</div>
// } 

// export default SimplerComponent

const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy</div>
export default SimplerComponent