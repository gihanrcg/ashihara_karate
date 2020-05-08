import React, { Component } from 'react';

import japaneses from '../../../images/Ashihara_Karate.png'
import logo from '../../../images/uclangrad2018.png'
import './ParalaxStyles.css'

class ParallaxContainer extends Component {
    render() {
        return (
            <div >
                <div className="parallax" style={{ backgroundImage: 'url(' + this.props.img + ')' }}>
                    <div className="parallax-container" style={{ height: '100vh' }} >
                        {
                            this.props.showInner && (
                                <div>
                                    <table className="logo-table" >
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '30%' }} align="right">
                                                    <img src={japaneses} style={{ width: '90%' }} />
                                                </td>
                                                <td style={{ width: '70%' }} align="left">
                                                    <div className="parallax-container-inner" align="center" >

                                                        <img src={logo} style={{ width: '50%' }} className="logo" />
                                                        <h2 style={{ color: 'white' }}>SRI LANKA KARATE</h2>
                                                        <h2 style={{ color: 'white' }}>KAI KAN ASHIHARA KARATE</h2>
                                                        <button className="button button2" onClick={() => {
                                                            window.location.replace('/createUser')
                                                        }}>Join with US</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br /><br />
                                </div>
                            )
                        }


                    </div>
                </div>

                <div className="parallax" style={{ backgroundImage: 'url(' + this.props.img + ')' }}></div>


            </div>
        );
    }
}

export default ParallaxContainer;