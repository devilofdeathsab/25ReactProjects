import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./styles.css"
export default function StarRating({noOfStars=5}){
    const[rating,setrating]=useState(0)
    const[hover,sethover]=useState(0)

    function handleClick(getCurrentIndex){
    setrating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex)
    {
        sethover(getCurrentIndex)
    
    }
    function handleMouseLeave(getCurrentIndex)
    {
        rating(getCurrentIndex)
    
    }
return(
    <>
    <div className="rating">
    {
        [...Array(noOfStars)].map((_,index)=>{
            index+=1
            return <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave(index)}
            size={40}
            />
       })
    }
    </div>
    </>
)
}