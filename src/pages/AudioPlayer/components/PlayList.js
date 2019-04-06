import React from "react";

const PlayList = props => {
  const { playList, currentIndex, onSetCurrentTrack, onSetContent } = props;

  return (
    <div>
    <h3>Tracks</h3>
    
    <div className="app-play-list">      
      <ul>
        {playList.map((asset, index) => {
          const trackStatus = currentIndex === index ? true : false;

          return (
            <li key={index}>
              <a
                className={trackStatus ? "current" : null}
                onClick={() => onSetCurrentTrack(index)}
              >
                <img src={asset.featured_image} />
                <span
                  dangerouslySetInnerHTML={onSetContent(asset.title.rendered)}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default PlayList;
