import React, { Component } from 'react';
import './NewsCard.css'

class News extends Component {
    render() {
        return (
            <div align="center">
                <div data-aos="fade-up" className="card news-card" >
                    <img className="card-img-top" src={require('../../images/group.JPG')} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;