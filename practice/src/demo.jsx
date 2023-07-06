import React from 'react';
import './App.css';
import { Callback } from './Component/Callback';
import { Login } from './Component/Login';

function App() {
  const [data,setData] = React.useState([]);
    const [count,setCount] = React.useState(0);
    const [color,setColor] = React.useState(null);

  console.log(data)

  React.useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((json)=>{setData(json)})

  },[])
  const handleChange =()=>{
    setCount(count+1);
  }
  const handleChange2 =()=>{
    setCount(count-1);
  }
  const getcolour = (color) =>{
    setColor(color);
  }
  return (
    <div className="App">
      {/* {data.map((item)=>(
        // <div>{item.title}</div>
      ))} */}
         <div>
         <Login/>
         </div>
          {/* <h1>Count {count}</h1>
          <button onClick = {handleChange}>+</button>
          <button onClick = {handleChange2}>-</button>

        //  </div>
         <div style={{backgroundColor : `${color}`, width: '200px', height: '200px' }}></div>
         <Callback getcolour = {getcolour}/> */}
    </div>
  );
}

// export default App;
