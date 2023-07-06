import React from 'react';
const Post = () =>{
    const [data,setData] = React.useState("")
    const [main,setMain] = React.useState([])

const handleChange = (e)=>{
    setData(e.target.value)
}

React.useEffect(()=>{
    fetch(`http://localhost:3003/todo`)
    .then((res)=>res.json())
    .then((res)=>setMain(res))
    .catch((err)=>console.log(err))
},[])

const addTodo = ()=>{
    const payload = {
        title:data,
        status:false,
    }
    fetch(`http://localhost/3003/todo`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))

}
    return(
        <>
        <input
        placeholder = "enter Todo"
        value = {data}
        onChange = {handleChange}
        />
        <button onClick = {addTodo}>ADD</button>
        <div>
            {
            main.map((item)=>(
               <div>{item.title}</div>
            ))}
        </div>
        </>
    )
}
export { Post}