import React, { Component } from 'react';
import News from './News';

class NewsFeed extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <News />
                <News />
                <News />
                <br /><br />
            </div>
        );
    }
}

export default NewsFeed;