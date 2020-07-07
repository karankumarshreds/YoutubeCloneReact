import React, { Component } from 'react';

import SearchBar from './SearchBar';
import Header from './Header';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
    // setting state so that App re-renders anytime
    // its state changes

    state = { videos: [], selectedVideo: null };
    componentDidMount() {
        this.onTermSubmit('random');
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items, selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="ui container">
                    <br />
                    <SearchBar onTermSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                {
                                    this.state.selectedVideo &&
                                    <VideoDetail video={this.state.selectedVideo} />
                                }
                            </div>
                            <div className="five wide column">
                                <VideoList
                                    videos={this.state.videos}
                                    onVideoSelect={this.onVideoSelect}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default App;