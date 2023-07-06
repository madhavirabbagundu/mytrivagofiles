import React from 'react'
const Todo = () =>{
const [input,SetInput] = React.useState("")
const [data, SetData] = React.useState([])

const handleChange = (e)=>{
    // const {name,value} = e.target.value,
SetInput(e.target.value);
console.log(e)
    // SetInput({...input,[name]:value})

}


React.useEffect(()=>{
    fetch(`http://localhost:3000/todos`)
    .then((res)=>res.json())
    .then((json)=>SetData(json))
    .catch((res)=>console.log(res))
},[])
const addTodo = ()=>{
    const payload = {
        title:input,
        status:false
    }
    fetch(`http://localhost:3000/todos`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))

}
// const {input} = input
return(
    <>
    <input
    placeholder='Enter the something'
    value = {input}
    // name = "input"
    onChange = {handleChange}
    />
    <button onClick = {addTodo}>ADD</button> 

    {
        data.map((item)=>(
            <h2>{item.title}</h2>
        ))
    }
    </>
)
}
export { Todo }

// import React from 'react';
// function Todo(){
//     const [input,setInput] = React.useState("");
//     const [todo,setTodos] = React.useState([]);


//   React.useEffect(()=>{
//     fetch(`http://localhost:3000/todos`)
//     .then((res)=>res.json())
//     .then((res)=>setTodos(res))
//     .catch((err)=>console.log(err));
    

//   },[])
  

//    const AddTodo = () =>{
//      const payload = {
//          title:input,
//          status:false
//      }
//      fetch(`http://localhost:3000/todos`,{
//          method:"POST",
//          body:JSON.stringify(payload),
//          headers:{
//              "content-type":"application/json"
//          }
//      })
//      .then((res)=>res.json())        //data is stored on the page
//      .then((res)=>console.log(res));
//     }

//     return (
//         <>
//        <input 
//        placeholder="add something"
//        value = {input}
//        onChange = {(e)=>setInput(e.target.value)}/>
//        <button onClick = {AddTodo}>ADD</button>
//      <div> 
//     {
//         todo.map((item)=>(
//             <h1>{item.title}</h1>
//         ))
//     }
//       </div>


//         </>
//     )
// }
// export {Todo}