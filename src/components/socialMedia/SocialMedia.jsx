import React, { Component } from 'react';
import './socialMediaStyles.css'
import FaceBook from './FaceBook';

class SocialMedia extends Component {
    render() {
        return (
            <div className="wrapper">
                
                <div className="main">
                    <FaceBook />
                </div>
            </div>

        );
    }
}

export default SocialMedia;