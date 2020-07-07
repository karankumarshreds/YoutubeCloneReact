import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    onChangeHandler = (e) => {
        this.setState({ term: e.target.value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <button className="ui blue mini  button">Search</button>
                </form>
            </div>
        );
    };
};

export default SearchBar;