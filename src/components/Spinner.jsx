
import React from 'react'

 function Spinner() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{height:"100vh"}}>
       <img className='d-block' width={250} height={250} src={require("../assets/img/Spinner.gif")} alt="spinner"/>
       <h4>لطفا منتظر بمانید ...</h4>
    </div>
  )
}
export default Spinner
