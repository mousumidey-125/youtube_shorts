import  { useState, useEffect } from 'react';
import { AiOutlineLike , AiFillLike} from "react-icons/ai";
import videodata from '../data/videodata.json'
import '../App.css';
function ShortVideo({id,src,title}){
    const [isLiked,setIsLiked]=useState(Array(videodata.length).fill(false))
    
    const handleLike = () => {
        setIsLiked(prevLikes=>{
            const newLikes=[...prevLikes]
            newLikes[id]=!newLikes[id]
            return newLikes
        })
      };

    return <div className='shortVideo'>
        
        <video controls autoPlay muted src={src} height={400} width={900} id={id}></video>
        <p style={{fontSize: '25px'}}>{title}</p>
        {isLiked[id] ? <AiFillLike style={{fontSize: '25px'}}/> : <AiOutlineLike style={{fontSize: '25px'}} onClick={(()=>handleLike())}/>}
        


    </div>
        
        
}

export default ShortVideo;