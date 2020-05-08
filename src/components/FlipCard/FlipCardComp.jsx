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
                <div align="center">
                    <FlippingCard>
                        <FlippingCardBack>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundColor: 'black',
                                    color: 'white'
                                }}>
                                <p style={{
                                    width: '100%',
                                    height: '100%',
                                    verticalAlign: 'middle',
                                    lineHeight: '35px'
                                }}>{this.props.details}</p>
                            </div>

                        </FlippingCardBack>
                        <FlippingCardFront>
                            <div className="img-wrap">
                                <img src={this.props.image} style={{ width: '100%' }} />

                            </div>


                        </FlippingCardFront>
                    </FlippingCard>
                </div>

                <div style={{
                    width: '100%',
                    backgroundColor: 'red',
                    color: 'white',
                    height: '40px',
                    lineHeight: '35px'
                }}>
                    <p align="center">Sensei {this.props.details}</p>
                </div>
            </div>

        );
    }
}

export default FlipCardComp;
