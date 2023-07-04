import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import './Home.css'
import { useSelector,useDispatch} from 'react-redux'
import { getCity } from '../Redux/CarouselData/action'



const leftButton = ({data}) =>{
  <span class="material-symbols-outlined">
arrow_forward_ios
</span>
}

function Carousel({data} ) {
  console.log(data)

  const City=useSelector((store)=>store.CityandCountry.data)
  // console.log(data)

//   const dispatch=useDispatch()
//   useEffect(()=>{
//     getCity(dispatch)
//   },[])

//     const dat=['https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg',
// 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/96/64967_v41.jpeg',
// 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/97/64975_v41.jpeg',
// 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/97/64971_v39.jpeg',
// 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/97/64975_v41.jpeg',
// 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/97/64971_v39.jpeg']




  const [active, setaAtive] = useState(0);
  return (
    <div >

      <ItemsCarousel
        autoPlay
        infiniteLoop={false}
        gutter={12}
        timeout={1}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={4}
        slidesToScroll={4}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={(value) => setaAtive(value)}
        rightChevron={"▶"}
        leftChevron={"◀"}
      >
        {data.map((ele, i) => (
         <div className="CarouselImage">
             <div
            key={i}
            style={{
              height: 200,
              background: `url(${ele.Image})`
            }}
          />
          <p>{ele.Location}</p>
          <p><span >{ele.number}</span> <b>{ele.price}</b></p>
         </div>
        ))}
      </ItemsCarousel>
    </div>
  );
}
export default Carousel