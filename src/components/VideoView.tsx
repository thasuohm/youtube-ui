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
import SortIcon from "@mui/icons-material/Sort";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type PropType = {
  darkMode: Boolean;
};

function VideoView({ darkMode }: PropType) {
  const [isSubScribe, setIsSubScribe] = useState<Boolean>(false);
  const [isShowDescription, setIsShowDescription] = useState<Boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [large, setLarge] = useState<Boolean>(false);
  const [isShowVideoSetting, SetIsShowVideoSetting] = useState<Boolean>(false);
  const [videoInformation] = useState({
    image: video,
    vidName: "Blue Archive #1 Test test mic test",
    views: 500,
    date: "17 ธ.ค. 2021",
    like: 500,
    owner: "AileGuz",
    subscriber: "1 ล้าน",
    videoLength: "10:12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti illo accusantium ex, reiciendis quisquam. Quae, amet. Fugit ratione iure, modi quae omnis perferendis voluptates esse laboriosam repellat sunt impedit cupiditate! Animi molestias asperiores vero! Sunt, exercitationem voluptatem hic nobis ad adipisci quia consequuntur, quo laboriosam incidunt, dolorem quod sint vero corporis omnis! Rerum dicta nisi, nostrum at quos ullam eius? Est quasi blanditiis, enim pariatur cum modi, saepe quidem voluptatem in alias nemo eligendi similique laboriosam nam necessitatibus, vel repudiandae omnis culpa ut aspernatur natus distinctio optio! Vitae assumenda, corrupti aperiam ab expedita nulla voluptas repellendus. Hic, laborum laboriosam.",
    comments: [
      { user: "Test", comment: "Pretty Cool", timePass: "1 นาทีที่แล้ว" },
      { user: "Testa", comment: "So good", timePass: "2 นาทีที่แล้ว" },
      { user: "Testas", comment: "Very fun", timePass: "3 นาทีที่แล้ว" },
      { user: "Testo", comment: "Pretty Good", timePass: "4 นาทีที่แล้ว" },
    ],
  });

  const onComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div
      className={`${
        large
          ? "video-page-container large-video-layout "
          : "video-page-container"
      }`}
    >
      <div className="vid-grid-item video">
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
              <div tool-tip="Pause (k)" className="top-tool-tip">
                <PauseIcon />
              </div>
              <SkipNextIcon />
              <div tool-tip="ปิดเสียง (m)" className="top-tool-tip ">
                <VolumeDownIcon />
              </div>
              <div>{videoInformation.videoLength}</div>
            </div>
            <div className="right-video-config">
              <div className="top-tool-tip" tool-tip="การตั้งค่า">
                <SettingsIcon
                  onClick={() => SetIsShowVideoSetting(!isShowVideoSetting)}
                />
              </div>
              {isShowVideoSetting && (
                <div className="video-setting">
                  <div> คำอธิบายประกอบ </div>
                  <div className="flex-between">
                    <div>ความเร็วในการเล่น </div> <NavigateNextIcon />{" "}
                  </div>
                  <div className="flex-between">
                    <div>คุณภาพ</div> <NavigateNextIcon />
                  </div>
                </div>
              )}
              <div className="top-tool-tip" tool-tip="โหมดโรงภาพยนตร์">
                <CropSquareIcon onClick={() => setLarge(!large)} />
              </div>
              <div className="top-tool-tip" tool-tip="เต็มหน้าจอ">
                <FullscreenIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vid-grid-item  video-info">
        <div className="video-title">{videoInformation.vidName}</div>
        <div className="video-info1">
          <div className="font-gray ">
            การดู {videoInformation.views} ครั้ง {videoInformation.date}
          </div>
          <div className="video-like">
            <div className="bottom-tool-tip" tool-tip="ฉันชอบวีดิโอนี้">
              <ThumbUpOutlinedIcon /> <span>{videoInformation.like}</span>
            </div>
            <div className="bottom-tool-tip" tool-tip="ฉันไม่ชอบวีดิโอนี้">
              <ThumbDownAltOutlinedIcon /> <span>ไม่ชอบ</span>
            </div>
            <div className="bottom-tool-tip" tool-tip="แชร์">
              <ReplyOutlinedIcon /> <span>แชร์</span>
            </div>
            <div className="bottom-tool-tip" tool-tip="บันทึก">
              <BookmarkAddOutlinedIcon /> <span>บันทึก</span>
            </div>
          </div>
        </div>

        <div className="video-description">
          <div className="video-info2">
            <div className="video-owner">
              <img src={profile} alt="profileOwner" className="user-profile" />
              <div className="video-owner-name">
                <div
                  className="user-name top-tool-tip hover-pointer"
                  tool-tip="AileGuz"
                >
                  {" "}
                  AileGuz
                </div>
                <div className="font-gray font-min">
                  {" "}
                  ผู้ติดตาม {videoInformation.subscriber} คน
                </div>
                <div className="  font-min video-description-container">
                  {!isShowDescription ? (
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

      <div className="vid-grid-item other-video">
        <VideoSideCard />
        <VideoSideCard />
        <VideoSideCard />
        <VideoSideCard />
        <VideoSideCard />
      </div>
      <div className="vid-grid-item comments">
        <div className="flex-center">
          <div className="user-name">
            ความคิดเห็น {videoInformation.comments.length} รายการ
          </div>
          <div className="flex-center">
            <SortIcon /> <span>เรียงตาม</span>
          </div>
        </div>
        <div className="user-comment-part">
          <img src={profile} alt="user_comment" className="user-profile " />
          <div className="submit-part">
            <input
              placeholder="เพิ่มความคิดเห็นสาธารณะ"
              onChange={(e) => onComment(e)}
              value={comment}
              className={`${
                darkMode ? "comment-input dark-mode-font " : "comment-input"
              }`}
            />
            {comment.length > 0 && (
              <div className="submit-comment">
                <TagFacesIcon />
                <div>
                  <span
                    onClick={() => {
                      setComment("");
                    }}
                  >
                    {" "}
                    ยกเลิก
                  </span>
                  <button
                    onClick={() => {
                      setComment("");
                    }}
                  >
                    ส่งความคิดเห็น
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {videoInformation.comments.map((comment, i) => {
          return (
            <div className="comment" key={i}>
              <img src={profile} alt="user_comment" className="user-profile" />
              <div>
                <span className="user-name">{comment.user}</span>
                <span className="font-gray font-min">{comment.timePass}</span>
                <div>{comment.comment}</div>
                <div className="flex-left-align-center inside-marginX-mini inside-marginXY-mini font-mini  ">
                  <ThumbUpOutlinedIcon fontSize="inherit" />
                  <ThumbDownAltOutlinedIcon fontSize="inherit" />
                  <span>ตอบกลับ</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VideoView;
