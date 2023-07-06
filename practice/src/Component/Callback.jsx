import React from 'react'
const Callback = ({ getcolour }) => {
    const [clor,setcolor] = React.useState("")

    const handleChange = (e)=>{
  setcolor(e.target.value)
  getcolour(e.target.value)
    }

    return (
        <>
        <input type = "text"
        placeholder = "Enter your color"
        onChange = {handleChange}
        value = {clor}/>
        </>
    )
}
export { Callback }