import React, { Component } from 'react';
import ParallaxContainer from './ParallaxContainer/ParallaxContainer';
import Introduction from './content/Introduction';
import History from './content/History';

import GroupImage from '../../images/group.JPG';
import nanchak from '../../images/nanchak.jpg';
import ParallaxCarousal from './carousal/ParallaxCarousal';
import ContactUs from '../contactUs/ContactUs';
import SriLankanHistory from './content/SriLankanHistory';
import TopNews from '../topNews/TopNews';

class HomePage extends Component {
    render() {
        return (
            <div>
                <ParallaxContainer img={GroupImage} showInner={true} />
                <ParallaxCarousal />
                <div className="container">
                    <TopNews />
                    <Introduction />
                    <History />
                    <SriLankanHistory />

                </div>
                <ParallaxContainer img={nanchak} showInner={false} />
                <div style={{ margin: '20px' }}></div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="youtube intro" className="embed-responsive-item" src="https://www.youtube.com/embed/KF9kvTfYmao"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
                <div style={{ margin: '20px' }}></div>
                <br /><br />
                <ContactUs />



            </div>
        );
    }
}

export default HomePage;