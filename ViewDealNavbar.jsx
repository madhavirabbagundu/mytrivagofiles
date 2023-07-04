import React from 'react'
import { Link } from 'react-router-dom'
import './ViewDeal.css'
function ViewDealNavbar(){
    return(
        <>
        <div className='Linkborder'>
        <Link className = "Link" to = "About">About</Link>
        <Link className='Link' to = "Photos">Photos</Link>
        <Link className='Link' to = "Deal">Deal</Link>
        <Link className='Link'to = "Review">Review</Link>
        </div>
        </>
    )
}
export { ViewDealNavbar }