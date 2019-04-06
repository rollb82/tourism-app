import React from 'react';

const TrackImage = (props) => {
  const { data, title } = props;

  const titleStyle = {
    background: "#ccc",
    position: "absolute",
    bottom: 0,
    margin: 0,
    width: "100%",
    padding: "1em",
    background: "rgba(54, 62, 62, 0.84)",
    color: "#fff"
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={titleStyle} className="audio-player-title">
        <h1>{title}</h1>
      </div>
      <img
        className="img-responsive audio-featured-image"
        src={data.featured_image}
        alt={title}
      />
    </div>
  );
};

export default TrackImage;
