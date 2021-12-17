import React from "react";
import video from "../images/videoCover.jpg";
import "../css/VideoSideCard.css";
function VideoSideCard() {
  return (
    <div className="video-side-card">
      <img src={video} alt="videoCover" className="video-cover" />
      <div>
        <div>Blue Archive #1 Test test mic test</div>
        <div className="font-gray">AileGuz</div>
        <div className="font-min font-gray ">
          การดู 50,000 ครั้ง 1 วันที่แล้ว
        </div>
      </div>
    </div>
  );
}

export default VideoSideCard;
