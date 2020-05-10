import React, { Component } from 'react';

import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards'
import './FlipCardStyles.css';


class FlipCardComp extends Component {

    render() {
        return (
            <div style={{
                borderStyle: 'solid',
                borderColor: 'red',
                borderRadius: '10px',
                margin: '5%'
            }}>

                <div style={{
                    width: '100%',
                    backgroundColor: 'red',
                    color: 'white',
                    height: '40px',
                    lineHeight: '35px'
                }}>
                    <p align="center">{this.props.details.name}</p>
                </div>
                <div align="center">
                    <div className="card md-8">
                        <img className="mem-image card-img-top "
                            src={this.props.img}
                            alt="Card image cap" />

                    </div>
                </div>


            </div>

        );
    }
}

export default FlipCardComp;
