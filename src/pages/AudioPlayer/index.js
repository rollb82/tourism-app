import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTour, setAudioPlayList } from './actions';
import { setContent } from './utils';
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTour: (id) => dispatch(getTour(id)),
        setAudioPlayList: (id, tour) => dispatch(setAudioPlayList(id, tour))
    }
}

class AudioPlayerPage extends Component {
    componentDidMount() {
        console.log();
        if (this.props.state.TourReducer.tour.id) {
            //console.log('id is defined');
            const { tour } = this.props.state.TourReducer;
            const { id } = this.props.match.params;
            this.props.setAudioPlayList(id, tour);
        }
        else {
            //const {id} = this.props.match.params;            
            this.props.getTour(9);
        }
    }

    render() {
        console.log(this.props.state.TourReducer);
        if (this.props.state.TourReducer.tour.id) {
            const { playList } = this.props.state.AudioPlayerReducer;
            return (
                <div>
                    {playList.map((asset, index) => {
                        const {audio} = asset.acf;
                        const {featured_image} = asset;
                        return (
                            <div key={index}>
                                <h1 dangerouslySetInnerHTML={setContent(asset.title.rendered)} />
                                <p>
                                    <img
                                        width="200px" 
                                        src={featured_image} 
                                        alt={asset.title.rendered} />
                                </p>
                                {/*
                                <p>
                                    {audio.duration_of_audio}
                                </p>
                                 */}
                                <p>
                                <audio 
                                    controls
                                    src={audio.audio_file}></audio>
                                </p>
                            </div>
                        );
                    })}
                </div>
            );
        }
        else {
            return (
                <div>
                    none
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayerPage);