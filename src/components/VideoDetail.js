import React from 'react';

const VideoDetail = ({ video }) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={url} title="videoplayer" />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoDetail;