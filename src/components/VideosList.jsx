import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Styles from '../styles/VideosList.module.css';
import VideoItem from './VideoItem';

const VideosList = ({videos, handleVidoeSelect}) => {
    const [scrollPosition, setScrollPosition] = useState()

    const scrollUp = (amountToScroll) => {
        setScrollPosition(scrollPosition + amountToScroll)
        window.scrollTo(0, scrollPosition)
    }

    const handleFunc = value => {
        handleVidoeSelect(value);
        scrollUp();
    }
    const renderVideo = videos.map(video => (
        <VideoItem key={video.etag} video={video} handleFunc={handleFunc} handleVidoeSelect={handleVidoeSelect} />
    ))
    return (
        <>
            <div className={Styles.recommend_section}>
                <p className={Styles.recommend_title}>Recommended</p>
            </div>
            <Row className={Styles.videos_list_container}>{renderVideo}</Row>
        </>
    );
};

export default VideosList;