import axios from "axios";
import { useEffect, useRef, useState } from "react";

// let suuid = "H264_AAC";

const WebRtc = () => {
  const playerRef = useRef<any>();
  const WebRtcRef = useRef<any>();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("update");
    let stream = new MediaStream();
    WebRtcRef.current = new RTCPeerConnection();
    WebRtcRef.current.addTransceiver("video", {
      direction: "sendrecv",
    });
    function getRemoteSdp() {
      axios
        .post(
          "http://127.0.0.1:8088/es/stream/receiver",
          JSON.stringify({
            rtspUrl:
              "rtsp://admin:kinco123@172.17.5.220:554/Streaming/Channels/101?transportmode=unicast",
            data: window.btoa(WebRtcRef.current.localDescription.sdp),
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res: any) => {
          console.log("res", res);
          const {
            data: { result },
          } = res;
          try {
            WebRtcRef.current.setRemoteDescription(
              new RTCSessionDescription({
                type: "answer",
                sdp: window.atob(result),
              })
            );
          } catch (e) {
            console.warn(e);
          }
        });
    }
    async function handleNegotiationNeededEvent() {
      let offer = await WebRtcRef.current.createOffer();
      await WebRtcRef.current.setLocalDescription(offer);
      getRemoteSdp();
    }
    WebRtcRef.current.onnegotiationneeded = handleNegotiationNeededEvent;
    WebRtcRef.current.ontrack = function (event: any) {
      stream.addTrack(event.track);
      playerRef.current.srcObject = stream;
    };

    // setTimeout(() => {
    //   console.log("close");
    //   WebRtcRef.current .close();
    // }, 10000);'
    return () => {
      WebRtcRef.current.close();
    };
  }, [playerRef, flag]);
  // 图片下载方法
  const funDownload = (domImg: any, filename: any) => {
    // 创建隐藏的可下载链接
    const eleLink = document.createElement("a");
    eleLink.download = filename;
    eleLink.style.display = "none";
    // 图片转base64地址
    const canvas = document.createElement("canvas");
    const { offsetWidth: width, offsetHeight: height } = domImg;
    canvas.width = 1920;
    canvas.height = (1920 * height) / width;
    const context: any = canvas.getContext("2d");
    context.drawImage(domImg, 0, 0, 1920, (1920 * height) / width);
    eleLink.href = canvas.toDataURL("image/png");
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  };
  const onCapture = () => {
    const video = playerRef.current;
    funDownload(video, "img.png");
  };
  const onClose = () => {
    WebRtcRef.current.close();
  };
  const onConnect = () => {
    setFlag(!flag);
  };
  return (
    <div>
      <video
        style={{ width: "800px", height: "800px" }}
        ref={playerRef}
        autoPlay
        muted
        controls
      ></video>
      <button onClick={onCapture}>截图</button>
      <button onClick={onClose}>close</button>
      <button onClick={onConnect}>connect</button>
    </div>
  );
};
export default WebRtc;
