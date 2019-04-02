import React from "react";

const PlayAndPauseButton = props => {
  const { playing, onHandleToggle } = props;

  return (
    <span>
    <button className="app-btn-play" onClick={() => onHandleToggle()}>
      {playing ? <span className="fa fa-play" ariaLabel="Pause"></span> : <span className="fa fa-pause" ariaLabel="Pause"></span>}
    </button>
    </span>
  );
};

const PrevButton = props => {
  const { currentIndex, onPrevTrack } = props;

  return (
    <span>
      {currentIndex === 0 ? null : (
        <button onClick={() => onPrevTrack(currentIndex)}>
        <span className="fa fa-backward" ariaLabel="Back"></span>
        </button>
      )}
    </span>
  );
};

const NextButton = props => {
  const {    
    currentIndex,
    playList,
    onNextTrack
  } = props;
  return (
    <span>
      {currentIndex === playList.length - 1 ? null : (
        <button onClick={() => onNextTrack(currentIndex)}>
          <span className="fa fa-forward" ariaLabel="Next"></span>
        </button>
      )}
    </span>
  );
};

const AudioPlayerControls = props => {
  
  return (
    <div className="audio-controls">
      <PrevButton {...props} />
      <PlayAndPauseButton {...props} />
      <NextButton {...props} />
    </div>
  );
};

export default AudioPlayerControls;
