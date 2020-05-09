import React, { Component } from 'react';
import ParallaxContainer from './ParallaxContainer/ParallaxContainer';
import Introduction from './content/Introduction';
import History from './content/History';

import GroupImage from '../../images/group.JPG';
import nanchak from '../../images/nanchak.jpg';
import ParallaxCarousal from './carousal/ParallaxCarousal';
import ContactUs from '../contactUs/ContactUs';

class HomePage extends Component {
    render() {
        return (
            <div>

                <ParallaxContainer img={GroupImage} showInner={true} />
                <ParallaxCarousal />
                <div className="container">
                    <div style={{ margin: '20px' }}></div>
                    <Introduction />
                    <History />
                </div>
                <ParallaxContainer img={nanchak} showInner={false} />
                <br/><br/>
                <ContactUs />

            </div>
        );
    }
}

export default HomePage;