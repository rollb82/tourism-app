import React from 'react';

const BannerAudioPlayer = (props) => {

    const styles = {
        audioBannerPosition:{
        //background: 'red',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
        },
        playIcon: {
            //background: 'blue',
            position: 'absolute',
            top: '35%',
            left: '45%',
            transform: 'translace(-50%,-50%)',
            fontSize: '3em',
            padding: 0,     
            textShadow: '2px 2px 5px #000'       
        }
    }

    let isPlaying = false;
    
    const playAudio = () => {
        isPlaying = true;
        console.log(isPlaying);
    }


    return (
        <div
            style={styles.audioBannerPosition}
            className="custom-audio-banner">
            <div
                onClick={playAudio}
                style={styles.playIcon}
                className="playIcon">
                <i className="fa fa-play-circle-o" />
            </div>
        </div>
    );
}

export default BannerAudioPlayer;