import React from 'react'

const Login = ()=>{
    const [login,setLogin] = React.useState({
        name:"",
     password:"",
    email:""})
    const [data,SetData] = React.useState([])

    const handleChange = (e)=>{
        const {name,value} = e.target
        setLogin({...login,[name]:value})

    }
    React.useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((json)=>SetData(json))
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(login)
        if(password.length===3){
            alert("sucess")
        }

    }
    // console.log(login)
    const {name,email,password} = login;
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type = "text"
        placeholder='Enter your name'
        name = "name"
        value = {name}
       onChange = {handleChange}
       />
       <input type = "email"
       placeholder='Enter your email'
       name = "email"
       value = {email}
       onChange={handleChange}/>
       <input type = "password"
       placeholder='Enter your password'
       name = "password"
       value = {password}
       onChange={handleChange}
       />
       <button type = "submit">Submit</button>
      </form>
      <div>
        {data.sort((a,b)=>b.id - a.id).map((item)=>(
            <div>{item.id > 10 ? item.title +" "+ item.id : ""}</div>
        ))}
      </div>
        </>
    )
}

export { Login }