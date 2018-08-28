import React from 'react';
import ReactHowler from 'react-howler';
import { connect } from 'react-redux';
import { setCurrentlyPlaying, toggleAudio, closePlayer } from '../../../actions/tourActions';


const audio = {
    //audioFile: '/wp-content/uploads/2018/06/sample.mp3',
    audFile: null,
    banner: '/wp-content/uploads/2018/08/st-john-s-church-graveyard.jpg',
    progress: 0
};



const buttonStyles = {
    background: 'none',
    border: 'none'
}


const mapStateToProps = (state) => {
    return {
        currentlyPlaying: state.currentlyPlaying,
        isAudioPlaying: state.isAudioPlaying
    }
};

const mapDispatchToProps = (disptach) => {
    return {
        setCurrentlyPlaying: (audio) => disptach(setCurrentlyPlaying(audio)),
        toggleAudio: (val) => disptach(toggleAudio(val)),
        closePlayer: () => disptach(closePlayer())
    }
}



class PointAudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.playerMode = this.playerMode.bind(this);
        this.closePlayer = this.closePlayer.bind(this);
    }

    playerMode() {
        console.log('change player mode');
    }

    closePlayer() {
        console.log('close player');
        this.props.closePlayer();
    }


    playAudio() {
        console.log(this.props);
        const audioState = this.props.isAudioPlaying == true ? false : true;
        //this.props.setCurrentlyPlaying(audio);
        this.props.toggleAudio(audioState);
    }

    render() {
        const { isAudioPlaying } = this.props;
        const slideClass = 'app-point-container-modal animated slideInUp';
        console.log(this.props.currentlyPlaying.audioFile);
        if (this.props.currentlyPlaying.audioFile !== null) {

            const styles = {
                position: 'fixed',
                zIndex: 3,
                //border: '2px solid red',
                top: 0,
                left: 0,
                width: '100%',
                backgroundImage: `url(${this.props.currentlyPlaying.banner})`,
                backgroundColor: '#ccc',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%'
            }

            return (
                <div className={slideClass} style={styles}>
                    <div className="app-point-title">
                        <div className="point-actions-header">
                            <button
                                className="point-menu"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    float: 'right'
                                }}>
                                <i className="fa fa-ellipsis-v" aria-hidden="true" />
                            </button>
                            <button
                                onClick={this.closePlayer}
                                className="point-menu"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    float: 'right'
                                }}>
                                <i className="fa fa-times" aria-hidden="true" />
                            </button>
                        </div>
                        <div
                            onClick={this.playerMode}
                            className="point-data">
                            <img
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    float: 'left'
                                }}
                                src={this.props.currentlyPlaying.banner}
                                alt="title" />
                            <b>Title</b>
                            <br />
                            subtitle
                        </div>
                    </div>

                    <div className="point-actions">
                        <div className="point-audio">
                            <ReactHowler
                                src={[this.props.currentlyPlaying.audioFile]}
                                playing={isAudioPlaying} />
                            {isAudioPlaying}
                            {/*
                            <div>
                                <input type="range" />
                            </div>
                            */}
                            <div style={{
                                position: 'relative',
                                //border: '1px solid red'
                            }}>
                                {/*
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        position: 'absolute',
                                        left: 0
                                    }}
                                    src={this.props.currentlyPlaying.banner}
                                    alt="title" />
                                    */}
                                <button
                                    style={buttonStyles}>
                                    <i
                                        className="fa fa-step-backward"
                                        aria-hidden="true"></i>
                                </button>
                                <button
                                    className="playIcon"
                                    onClick={this.playAudio}>
                                    {isAudioPlaying == true ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>}
                                </button>
                                <button
                                    style={buttonStyles}>
                                    <i
                                        className="fa fa-step-forward"
                                        aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                null
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointAudioPlayer);