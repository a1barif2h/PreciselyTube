import React, { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import youtube from '../apiCall/youtube';
import SearchBar from '../components/SearchBar';
import VideoDetails from '../components/VideoDetails';
import VideoPlayer from '../components/VideoPlayer';
import VideosList from '../components/VideosList';
import '../styles/index.css';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSubmit = async searchText => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    searchText
                }
            })

            setVideos(response.data.items)
        } catch (error) {
            console.log(error)
        }
    };

    const handleVidoeSelect = video => setSelectedVideo(video);
    console.log(typeof videos)
    return (
        <>
            <SearchBar handleSubmit={handleSubmit} />
            <Row className={styles.main_container}>
                <Col md={7}>
                    <VideoPlayer video={selectedVideo} />
                    <VideoDetails video={selectedVideo} />
                </Col>
                <Col md={5}>
                    {
                        videos.length > 0 ? 
                        <VideosList handleVidoeSelect={handleVidoeSelect} videos={videos} /> :
                        <div className='spiner_container'>
                            <Spinner  animation="border" variant="primary" />
                        </div>
                    }
                    
                </Col>
                
            </Row>
        </>
    );
};

export default MainPage;