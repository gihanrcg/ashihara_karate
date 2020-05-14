import React, { Component } from 'react';
import './NewsCard.css'

class News extends Component {
    render() {

        return (
            <div align="center">
                <div data-aos="fade-up" className="card news-card" >
                    <h4 className="card-title">{this.props.data.topic}</h4>
                    <div className="container">
                        <div className="container">
                            <img className="card-img-top" src={this.props.data.images[0]} alt="news" />
                        </div>
                    </div>

                    <div className="card-body">
                        <h4 className="card-title">{this.props.data.topic}</h4>
                        <h6 className="card-title">{this.props.created}</h6>
                        <p className="card-text">{this.props.data.body}</p>
                        <a href={`/n/${this.props.data.id}`} className="btn btn-primary">See More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;