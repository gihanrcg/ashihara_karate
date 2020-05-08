import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';


class FaceBook extends Component {
    render() {
        return (
            <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FCommunity%2FAshihara-Karate-Kaikan-Sri-Lanka-115689125795491%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2253423928099653" width={340} height={800} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media" />
            </div>
        );
    }
}

export default FaceBook;