import React, { Component } from 'react';
import './NewsCard.css'

class News extends Component {
    render() {
        return (
            <div align="center">
                <div data-aos="fade-up" className="card news-card" >
                    <img className="card-img-top" src={this.props.data.images[0]} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.topic}</h5>
                        <p className="card-text">{this.props.data.body}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;