import React from "react";
import video from "../images/videoCover.jpg";
import "../css/VideoSideCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function VideoSideCard() {
  return (
    <div className="video-side-card">
      <div className="video-preview-container">
        <div className="video-preview-icons">
          <AccessTimeIcon />
          <PlaylistAddCircleIcon />
        </div>
        <div className="video-preview-length">
          <div>10:10</div>
        </div>
        <img src={video} alt="videoCover" className="video-cover" />
      </div>
      <div>
        <div>Blue Archive #1 Test test mic test</div>
        <div className="font-gray">AileGuz</div>
        <div className="font-min font-gray ">
          การดู 50,000 ครั้ง 1 วันที่แล้ว
        </div>
      </div>
      <MoreVertIcon className="hover-show-icon"/>
    </div>
  );
}

export default VideoSideCard;
