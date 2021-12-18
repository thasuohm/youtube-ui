import React, { useState } from "react";
import video from "../images/videoCover.jpg";
import "../css/VideoView.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import VideoSideCard from "./VideoSideCard";
import profile from "../images/profile.jpg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

type PropType = {
  darkMode: Boolean;
};

function VideoView({ darkMode }: PropType) {
  const [isSubScribe, setIsSubScribe] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [large] = useState(true);
  const [videoInformation] = useState({
    image: video,
    vidName: "Blue Archive #1 Test test mic test",
    views: 50000,
    date: "17 ธ.ค. 2021",
    like: 500,
    owner: "AileGuz",
    subscriber: "1 ล้าน",
    videoLength: "10:12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti illo accusantium ex, reiciendis quisquam. Quae, amet. Fugit ratione iure, modi quae omnis perferendis voluptates esse laboriosam repellat sunt impedit cupiditate! Animi molestias asperiores vero! Sunt, exercitationem voluptatem hic nobis ad adipisci quia consequuntur, quo laboriosam incidunt, dolorem quod sint vero corporis omnis! Rerum dicta nisi, nostrum at quos ullam eius? Est quasi blanditiis, enim pariatur cum modi, saepe quidem voluptatem in alias nemo eligendi similique laboriosam nam necessitatibus, vel repudiandae omnis culpa ut aspernatur natus distinctio optio! Vitae assumenda, corrupti aperiam ab expedita nulla voluptas repellendus. Hic, laborum laboriosam.",
  });

  return (
    <div className="video-page-container">
      <div className="video">
        <img
          src={video}
          alt="videoClip"
          className={`${large ? "large-size-video" : "normal-size-video"}`}
        />
        <div className="video-config-container">
          <div className="video-progress">
            <div className="video-progress-current"></div>
          </div>
          <div className="video-config">
            <div>
              <PauseIcon />
              <SkipNextIcon />
              <VolumeDownIcon />
              <div>{videoInformation.videoLength}</div>
            </div>
            <div>
              <SettingsIcon />
              <CropSquareIcon />
              <FullscreenIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="video-info">
        <div className="video-title">{videoInformation.vidName}</div>
        <div className="video-info1">
          <div className="font-gray ">
            การดู {videoInformation.views} ครั้ง {videoInformation.date}
          </div>
          <div className="video-like">
            <div>
              <ThumbUpOutlinedIcon /> <span>{videoInformation.like}</span>
            </div>
            <div>
              <ThumbDownAltOutlinedIcon /> <span>ไม่ชอบ</span>
            </div>
            <div>
              <ReplyOutlinedIcon /> <span>แชร์</span>
            </div>
            <div>
              <BookmarkAddOutlinedIcon /> <span>บันทึก</span>
            </div>
          </div>
        </div>

        <div className="video-description">
          <div className="video-info2">
            <div className="video-owner">
              <img
                src={profile}
                alt="profileOwner"
                className="video-owner-image"
              />
              <div className="video-owner-name">
                <div> AileGuz</div>
                <div className="font-gray font-min">
                  {" "}
                  ผู้ติดตาม {videoInformation.subscriber} คน
                </div>
                <div className="  font-min video-description-container">
                  {isShowDescription ? (
                    <>
                      {videoInformation.description.slice(0, 30)}
                      <div
                        className="font-gray font-min hover-pointer"
                        onClick={() => {
                          setIsShowDescription(!isShowDescription);
                        }}
                      >
                        แสดงเพิ่มเติม
                      </div>
                    </>
                  ) : (
                    <>
                      {videoInformation.description}{" "}
                      <div
                        className="font-gray font-min hover-pointer"
                        onClick={() => {
                          setIsShowDescription(!isShowDescription);
                        }}
                      >
                        แสดงน้อยลง
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="subscribe">
              {!isSubScribe ? (
                <button
                  className="subscribe-button"
                  onClick={() => setIsSubScribe(true)}
                >
                  ติดตาม
                </button>
              ) : (
                <>
                  <button
                    className="subscribe-button subscribed"
                    onClick={() => setIsSubScribe(false)}
                  >
                    ติดตามแล้ว
                  </button>
                  <NotificationsNoneOutlinedIcon />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="other-video">
        <VideoSideCard />
        <VideoSideCard />
        <VideoSideCard />
        <VideoSideCard />
        <VideoSideCard />
      </div>
    </div>
  );
}

export default VideoView;
