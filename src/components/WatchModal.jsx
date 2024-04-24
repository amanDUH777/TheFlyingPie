import React, { useState } from "react";
import Video from "../images/video.gif";


const WatchModal = ({ showWatchModal, setShowWatchModal }) => {


    return (
        <>
            <div className="watchModalContainer-background">
                <span onClick={() => setShowWatchModal(false)} className="closeWatchModal">x</span>
                <div className="watchModalContainer">
                    <p className="watchTag">from our beach live!</p>
                    <img className="watchMe" src={Video} alt="video" />
                </div>
            </div>
        </>
    )
}

export default WatchModal