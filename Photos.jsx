import React from 'react'
function Photos(){
    const [viewData,setViewData] = React.useState([]);
    console.log(viewData)
    // const viewData1 = viewData[0];
    React.useEffect(()=>{
   getdata()
    },[])


    const getdata=()=>{
        fetch('https://trivagoserver.onrender.com/hotels1')
        .then((res) => res.json())
        .then((json) => setViewData(json))
      
       }
    return(
        <>
        {/* <div>hello world</div> */}
        <div className='viewData'>
            {
            viewData.map((item)=>(
                <div className='photos' key = {item.id}>

            {item.img.map((e)=>(
                <div className='photos1'>
                    <img className='photos2' src = {e}/>
                </div>
            ))}
                    </div>
            ))
            } 

        </div>
        </>
    )

}
export { Photos }