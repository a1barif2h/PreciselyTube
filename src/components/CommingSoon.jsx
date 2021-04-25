import React from 'react';
import { Wave } from 'react-animated-text';
import Styles from "../styles/VideoDetails.module.css";

const CommingSoon = ({text}) => {
    return (
        <>
           <div className={Styles.exampleStyle}>
                <Wave text={text} effect="stretch" effectChange={2.0} />
            </div>
        </>
    );
};

export default CommingSoon;