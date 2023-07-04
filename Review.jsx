import React from 'react'
function Review(){
    const [viewData,setViewData] = React.useState([]);
    console.log(viewData)
    // const viewData1 = viewData[0];
    React.useEffect(()=>{
   getdata()
    },[])


    const getdata=()=>{
        fetch('https://trivagoserver.onrender.com/hotels')
        .then((res) => res.json())
        .then((json) => setViewData(json))
      
       }
    return(
        <>
        {/* <div>hello world</div> */}
        <div className='viewData'>
            {
            viewData.map((item)=>(
                <div className='about' key = {item.id}>
                 {/* <h4>{item.name}</h4> */}
                 <p> location:   {item.review.location}</p> 
                <div className='skillbar'></div>
                <div className='skillbar1'>Excellent(9.0 / 10)</div>
               <p>Room     :{item.review.room}</p>
               <div className='skillbar'></div>
               <div className='skillbar1'>Excellent(9.0 / 10)</div>

               <p>Service    :{item.review.services}</p>
               <div className='skillbar'></div>
               <div className='skillbar1'>Excellent(9.0 / 10)</div>

               <p>facilities     :{item.review.facilities}</p>
               <div className='skillbar'></div>
               <div className='skillbar1'>Excellent(9.0 / 10)</div>
      
               <p>Vom    :{item.review.vom}</p>
               <div className='skillbar'></div>
               <div className='skillbar1'>Excellent(9.0 / 10)</div>
               

                </div>
                
            ))
            } 

        </div>
        </>
    )

}
export { Review }