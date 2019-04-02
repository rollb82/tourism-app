import React, { Component } from "react";
import { connect } from "react-redux";
import { getTour, setAudioPlayList, setAudioPlay, handleToggle } from "./actions";
import { setContent } from "./utils";
import LoadingComponent from "../shared/components/Loading";
import ReactHowler from "react-howler";

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTour: (id, locationID) => dispatch(getTour(id, locationID)),
    setAudioPlayList: (id, tour) => dispatch(setAudioPlayList(id, tour)),
    setAudioPlay: data => dispatch(setAudioPlay(data)),
    handleToggle: status => dispatch(handleToggle(status))
  };
};

class AudioPlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: {
        playing: false,
        currentFile: null,
        title: null,
        data: null,
        currentIndex: null
      }
    };

    this.setCurrentTrack = this.setCurrentTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidMount() {
    

    const { params } = this.props.match;
    const { TourReducer } = this.props.state;
    const { locationID } = params;

   
    this.props.getTour(params.id, locationID);
    this.setCurrentTrack(0);
      
  }

  setCurrentTrack(index) {
    console.log(this.props.state.AudioPlayerReducer);
    const { playList } = this.props.state.AudioPlayerReducer;

    const track = playList[index];

    if (track) {
      const contentDirectory = "/wp-content";

      const title = track.title.rendered;
      const { audio_file } = track.acf.audio;
      const contentIndex = audio_file.indexOf(contentDirectory);
      
      const currentTrack = {
        title,
        currentFile: audio_file.substring(contentIndex),
        playing: true,
        data: track,
        currentIndex: index
      };

      this.props.setAudioPlay({
        ...currentTrack
      });

      localStorage.setItem('currentTrack',JSON.stringify({...currentTrack}))

    } else {        
        let currentTrack = JSON.parse(localStorage.getItem('currentTrack'));

        this.props.setAudioPlay({
            ...currentTrack
        });
    }
  }

  nextTrack(currentIndex) {
    const { playList } = this.props.state.AudioPlayerReducer;
    //playList
    if (currentIndex + 1 <= playList.length - 1) {
      this.setCurrentTrack(currentIndex + 1);
    } else {
      this.setCurrentTrack(0);
    }
  }

  prevTrack(currentIndex) {    
    //playList
    if (currentIndex - 1 <= 0) {
      this.setCurrentTrack(currentIndex -1);
    } else {
      this.setCurrentTrack(0);
    }
  }

  handleToggle(){
    const {playing} = this.props.state.AudioPlayerReducer.audioPlayer;
    this.props.handleToggle(playing?false:true);
  }

    render() {
        const { audioPlayer, playList } = this.props.state.AudioPlayerReducer;
        if (audioPlayer !== null) {
            const { currentFile,
                playing,
                title,
                data,
                currentIndex } = audioPlayer;

            const style = {
                width: "100%",
                border: "1px solid #000"
            };

            if (currentFile) {
                return (
                    <div className="row">
                        <div className="col-lg-8">
                            <div>{title}</div>
                            <ReactHowler
                                src={currentFile}
                                loop={false}
                                playing={playing}
                                onEnd={() => this.nextTrack(currentIndex)}
                            />
                            {currentFile !== null && data.featured_image !== false ? (
                                <img
                                    style={style}
                                    className="img-responsive"
                                    src={data.featured_image}
                                    alt={title}
                                />
                            ) : null}

                            {currentIndex === 0 ? null : <button onClick={() => this.prevTrack(currentIndex)}>Previous</button>}
                            <button onClick={() => this.handleToggle()}>
                                {playing ? <span>Pause</span> : <span>Play</span>}
                            </button>
                            {currentIndex === playList.length - 1 ? null : <button onClick={() => this.nextTrack(currentIndex)}>Next</button>}

                        </div>
                        <div className="col-lg-4">
                            <div className="app-side-bar">
                                {playList.map((asset, index) => {
                                    return (
                                        <div key={index}>
                                            <a onClick={() => this.setCurrentTrack(index)}>
                                                <span
                                                    dangerouslySetInnerHTML={setContent(
                                                        asset.title.rendered
                                                    )}
                                                />
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <LoadingComponent />
                    </div>
                );
            }
        }
    }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayerPage);
