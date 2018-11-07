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
        const { params } = this.props.match;
        const { TourReducer } = this.props.state;

        if (TourReducer.tour.id !== undefined) {
            const { tour } = TourReducer;
            const { locationID } = params;
            const { interesting_locations } = tour.acf;

            const foundItem = interesting_locations.find(element => {
                return element.id === Number(locationID);
            });

            this.props.setAudioPlayList(foundItem);
        }
        else {
            /**
             * todo: create a request based on a user entering the applicatoin with a specific tour id and location id.
             */
            this.props.getTour(params.id);
        }
    }

    render() {
        if (this.props.state.TourReducer.tour.id) {
            const { playList } = this.props.state.AudioPlayerReducer;
            if (playList === false) {
                return (
                    <div>
                        there are no audio files associated to this tour.
                    </div>
                );
            }
            else {
                return (
                    <div>
                        {playList.map((asset, index) => {
                            const { audio } = asset.acf;
                            //const { featured_image } = asset;
                            return (
                                <div key={index}>
                                    <h1 dangerouslySetInnerHTML={setContent(asset.title.rendered)} />
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