import React from 'react';
import { Row } from 'react-bootstrap';
import Styles from '../styles/VideosList.module.css';
import VideoItem from './VideoItem';

const VideosList = ({videos, handleVidoeSelect}) => {
    const renderVideo = videos.map(video => (
        <VideoItem key={video.etag} video={video} handleVidoeSelect={handleVidoeSelect} />
    ))
    return (
        <>
            <Row className={Styles.videos_list_container}>{renderVideo}</Row>
        </>
    );
};

export default VideosList;