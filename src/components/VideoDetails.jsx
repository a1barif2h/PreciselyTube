import React, { useState } from 'react';
import { BsBookmark, BsExclamationCircle, BsPencilSquare } from "react-icons/bs";
import { FiBookOpen, FiMessageSquare, FiShare2 } from "react-icons/fi";
import { MdAddCircle } from "react-icons/md";
import Styles from '../styles/VideoDetails.module.css';
import CommingSoon from './CommingSoon';
import { starRate } from './VideoItem';

const styles = {
    transition: 'all 1.5s ease-out',
};

const VideoDetails = ({video}) => {
    const [isOverviewClick, setIsOverviewClick] = useState(true);
    const [isNotesClick, setIsNotesClick] = useState(false);
    const [isReadingClick, setIsReadingClick] = useState(false);
    const [isDiscussionClick, setIsDiscussionClick] = useState(false);

    const [overviewOpacity, setOverviewOpacity] = useState(1);
    const [notesOpacity, setNotesOpacity] = useState(0);
    const [readingOpacity, setReadingOpacity] = useState(0);
    const [discussionOpacity, setDiscussionOpacity] = useState(0);

    const handleOverview = () => {
        setIsOverviewClick(true);
        setIsNotesClick(false);
        setIsReadingClick(false);
        setIsDiscussionClick(false);
        setOverviewOpacity(1);
        setNotesOpacity(0);
        setReadingOpacity(0);
        setDiscussionOpacity(0);
    };
    const handleNotes = () => {
        setIsOverviewClick(false);
        setIsNotesClick(true);
        setIsReadingClick(false);
        setIsDiscussionClick(false);
        setOverviewOpacity(0);
        setNotesOpacity(1);
        setReadingOpacity(0);
        setDiscussionOpacity(0);
    };
    const handleReading = () => {
        setIsOverviewClick(false);
        setIsNotesClick(false);
        setIsReadingClick(true);
        setIsDiscussionClick(false);
        setOverviewOpacity(0);
        setNotesOpacity(0);
        setReadingOpacity(1);
        setDiscussionOpacity(0);
    };
    const handleDiscussion = () => {
        setIsOverviewClick(false);
        setIsNotesClick(false);
        setIsReadingClick(false);
        setIsDiscussionClick(true);
        setOverviewOpacity(0);
        setNotesOpacity(0);
        setReadingOpacity(0);
        setDiscussionOpacity(1);
    };

    const handleDisplay = () => {
        if(isOverviewClick && isNotesClick === false && isReadingClick === false && isDiscussionClick === false) {
            return 'Overview'
        } else if (isOverviewClick === false && isNotesClick && isReadingClick === false && isDiscussionClick === false) {
            return 'Notes'
        } else if (isOverviewClick === false && isNotesClick === false && isReadingClick && isDiscussionClick === false) {
            return 'Reading material'
        } else {
            return 'Discussion forum'
        }
    }

    const channel = video?.snippet?.channelTitle;
    const description = video?.snippet?.description;
    const title = video?.snippet?.title;
    const kind = video?.id?.kind;

    return (
        <>
            <div className={Styles.video_details_container}>
                <div className={Styles.tab_item_container}>
                    <div onClick={handleOverview} 
                    style={{...styles}}
                    className={ 
                        `${handleDisplay() === "Overview" ? 
                        `${Styles.tab_item}` : 
                        `${Styles.off_tab_item}`}` 
                    }>
                        <BsExclamationCircle onClick={handleOverview} className={Styles.tab_icon} />
                        {
                            (handleDisplay() === 'Overview') ? 
                            <span style= {{opacity : `${overviewOpacity}`}} className={Styles.tab_title}>
                                Overview
                            </span> : null
                        }
                        
                    </div>
                    <div onClick={handleNotes} 
                    style={{...styles}}
                    className={
                        `${handleDisplay() === "Notes" ? 
                        `${Styles.tab_item}` : 
                        `${Styles.off_tab_item}`}` 
                    }>
                        <BsPencilSquare className={Styles.tab_icon} />
                        {
                            (handleDisplay() === 'Notes') ? 
                            <span style= {{opacity : `${notesOpacity}`}} className={Styles.tab_title}>
                                Notes
                            </span> : null
                        }
                    </div>
                    <div onClick={handleReading} 
                    style={{...styles}}
                    className={
                        `${handleDisplay() === "Reading material" ? 
                        `${Styles.tab_item}` : 
                        `${Styles.off_tab_item}`}` 
                    }>
                        <FiBookOpen className={Styles.tab_icon} />
                        {
                            (handleDisplay() === 'Reading material') ? 
                            <span style= {{opacity : `${readingOpacity}`}} className={Styles.tab_title}>
                                Reading material
                            </span> : null
                        }
                    </div>
                    <div onClick={handleDiscussion} 
                    style={{...styles}}
                    className={
                        `${handleDisplay() === "Discussion forum" ? 
                        `${Styles.tab_item}` : 
                        `${Styles.off_tab_item}`}`
                    }>
                        <FiMessageSquare className={Styles.tab_icon} />
                        {
                            (handleDisplay() === 'Discussion forum') ? 
                            <span style= {{opacity : `${discussionOpacity}`}} className={Styles.tab_title}>
                                Discussion forum
                            </span> : null
                        }
                    </div>
                </div>

                {
                    (handleDisplay() === "Overview") && kind !== undefined ? 

                    <div className={Styles.video_details_section}>
                        <p className={Styles.hase_tag}> {kind} <span className={Styles.tag_icon}> <MdAddCircle /> </span> </p>
                        <div className={Styles.title_container}>
                            <p className={Styles.title}> {title}  </p>
                            <p className={Styles.title_icons}>
                                <FiShare2 style={{cursor: "pointer"}} />
                                <BsBookmark style={{cursor: "pointer"}} className='ml-5' />
                            </p>
                        </div>
                        <p className={Styles.channel}> {channel} </p>
                        <div className={Styles.description_container}>
                            <p className={Styles.description}> {description} </p>
                            <p className={Styles.video_details_star}> {starRate} </p>
                        </div>
                    </div>
                    
                    : kind === undefined ? <CommingSoon text="Please Search some video from youtube and enjoy :)" /> :  <CommingSoon text="Cooming Soon :)" />
                }
            </div>
        </>
    );
};

export default VideoDetails;