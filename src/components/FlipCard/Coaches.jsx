import React, { Component } from 'react';
import './skillSectionStyles.css'

import FlipCardComp from './FlipCardComp'

class coaches extends Component {


    importAll = (r) => {
        return r.keys().map(r);
    }

    render() {

        const cardStyles = {
            padding: '1px'
        }
        const images = this.importAll(require.context('../../../images/coaches', false, /\.(png|jpe?g|svg)$/));

        return (

            <div>


                <div className="container">

                    <div className="row row-flex">


                        {
                            images.map((ob, key) => {
                                return (


                                    <div style={{marginTop:'10px'}} key={key} className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="content ">
                                            <FlipCardComp
                                                image={ob}
                                                details={ob.substring(ob.lastIndexOf("/") + 1, ob.lastIndexOf("."))} />
                                        </div>
                                    </div>



                                )
                            })
                        }







                    </div>
                </div>


                {/* <div align="center">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3" >Programming Languages and Frameworks</div>


                    <div className="cards-skill">
                        {
                            images.map((ob, key) => {
                                return (

                                    <div key={key}
                                        className="col"
                                        style={cardStyles}
                                    >
                                        <FlipCardComp
                                            image={ob}
                                            details={ob.substring(ob.lastIndexOf("/") + 1, ob.lastIndexOf("."))} />
                                    </div>


                                )
                            })
                        }

                    </div>

                </div> */}
            </div>
        );

    }
}

export default coaches;