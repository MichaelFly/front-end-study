import React, {useEffect, useRef} from 'react';
import  EZUIKit from 'ezuikit-js';

export default function (){
  const ref = useRef(null)
  useEffect(()=>{
    if(ref?.current){
      var player = new EZUIKit.HLS('myplayer','http://open.ys7.com/v3/openlive/E49076039_1_2.m3u8?expire=1717204251&id=586482194059374592&t=e4220cc13bc487fb8d10a6266181e30b208a863f8a722a768e61e418f8685ea9&ev=100');
      player.play();
    }
  },[ref?.current])

  return (
    <div>
      <video
        ref={ref}
        id="myplayer"
        width="400"
        height="300"
      controls
        autoPlay
      />
    </div>
  )
}
