import React from 'react'
function About(){
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
                 <h4 className='name'>{item.name}</h4>
                <div className='about1'> <p>{item.about}</p>
                
                    <h5>AllAmenities</h5>
                    <div className='allmities'>

                  <div className='allmities1'>
                    <h6>Hotel</h6>
                    <p className='about2'>{item.allAmenities.hotel}</p>
                    </div>

                   <div className='allmities2'>
                    <h6>Room</h6>
                    <p className='about2'>{item.allAmenities.room}</p>
                    </div>

                    <div className='allmities2'>
                    <h6>Wellness/Spa</h6>
                    <p className='about2'>{item.allAmenities.spa}</p>
                    </div>

                  </div>
                </div>
                  </div> 
            ))
            } 

        </div>
        </>
    )

}
export { About }