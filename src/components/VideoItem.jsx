import { faStar as rStar } from '@fortawesome/free-regular-svg-icons';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import "../styles/index.css";
import Styles from "../styles/VideoItem.module.css";

export const starRate = <>
<FontAwesomeIcon className={`${Styles.star_icon} ml-2`} icon={faStar} /><FontAwesomeIcon className={`${Styles.star_icon} ml-2`} icon={faStar} /><FontAwesomeIcon className={`${Styles.star_icon} ml-2`} icon={faStar} /><FontAwesomeIcon className={`ml-2`} icon={rStar} /><FontAwesomeIcon className={`ml-2`} icon={rStar} />
</>

const VideoItem = ({video, handleVidoeSelect}) => {
    const img = video?.snippet?.thumbnails?.medium?.url;
    const discription = video?.snippet?.descrioption;
    const title = video?.snippet?.title.slice(0, 34);
    const channel = video?.snippet?.channelTitle;


    return (
        <>
            <Col sm={12}>
                <Card onClick={() => handleVidoeSelect(video)} className={Styles.video_container}>
                    <Row>
                        <Col md={6} className={Styles.video_thumbnail}>
                            <img className={Styles.thumbnails_img} src={img} alt={discription}/>
                            <ProgressBar className={Styles.video_prograss} now={60} />
                        </Col>
                        <Col md={6} className="video_discription">
                            <p style={{float: "right", overflow:"hidden", fontSize: "18px"}} ><BsThreeDotsVertical/></p>
                            <h2 className={Styles.video_title}>
                                {title}...
                            </h2>
                            <p className={Styles.channel}>
                                {channel}
                            </p>
                            <p className={Styles.star_rate}>
                                {starRate}
                            </p>
                            <p className={Styles.view_section}>
                                <span className='mr-5'>2days ago</span> <span> <FontAwesomeIcon icon={faEye} /> 1.5k</span>
                            </p>
                        </Col>
                    </Row>
                </Card>
                <hr className={Styles.hr_style}/>
            </Col>
        </>
    );
};

export default VideoItem;