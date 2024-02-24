import { useEffect, useState } from "react";
import './App.css';
import ShortVideo from './components/ShortVideo';
import videodata from './data/videodata.json'

function App() {
  const [videoIndex,setVideoIndex]=useState(0)
  const [currentVideo,setCurrentVideo]=useState(videodata[videoIndex])
  useEffect(()=>{
    setCurrentVideo(videodata[videoIndex])
  },[videoIndex])
  const handlePrev=()=>{
    
    {videoIndex===0 ? setVideoIndex(videodata.length-1) : setVideoIndex(videoIndex-1)}

  }
  const handleNext=()=>{
    {videoIndex===videodata.length-1 ? setVideoIndex(0) : setVideoIndex(videoIndex+1)}
  }
  return (
<div className="videoContainer">
<span class="material-symbols-outlined prevButton" onClick={()=>handlePrev()}>navigate_before</span>
<div className="video">
<ShortVideo id={currentVideo.id} src={currentVideo.src} title={currentVideo.title} ></ShortVideo>
</div>

<span class="material-symbols-outlined nextButton" onClick={()=>handleNext()}>navigate_next</span>

</div>
    
  );
}

export default App;
