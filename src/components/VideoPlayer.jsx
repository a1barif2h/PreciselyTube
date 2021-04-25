import React from 'react';
import Styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({video}) => {
    const videoSrc = `https://www.youtube.com/embed/${video?.id?.videoId}?autoplay=1&cc_load_policy=1`;
    return (
        <>
            <div className={Styles.video_player_container}>
                <iframe className={Styles.video_player} src={videoSrc} allowFullScreen title="Video player" />
            </div>
        </>
    );
};

export default VideoPlayer;