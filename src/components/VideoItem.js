import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div onClick={() => onVideoSelect(video)} className="ui card">
            <div className="item">
                <div className="image">
                    <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="thumb" />
                </div>
                <div className="content card-content">
                    <div className="header">
                        <h5>{video.snippet.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VideoItem;