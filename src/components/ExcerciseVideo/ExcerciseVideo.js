import React from "react";
import "./ExcerciseVideo.css"

const ExcerciseVideo = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <div>Loading......</div>;

  return (
    <div className="video-wrapper container-fluid">
      <div className="video-section container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="title">
              <p>
                Watch{" "}
                <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
                  {name}
                </span>{" "}
                exercise videos
              </p>
              <div></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
           <div className="youtube-video-wrapper">
           {exerciseVideos?.slice(0, 2)?.map((item, index) => (
          <div className="youtube-card">
             <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p>{item.video.title}</p>
              <p>{item.video.channelName}</p>
            </div>
          </a>
          </div>
         
        ))}
           </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExcerciseVideo;
