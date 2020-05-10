import React, { Component } from 'react';
import './ModalBoxStyles.css'

class ModalBox extends Component {
    render() {
        console.log(this.props.ob)
        if (this.props.obj) {
            return (
                <div>
                    <div id="myModal" className="modal col-12 col-sm-8 col-md-6 col-lg-4">


                        <span className="closex">&times;</span>
                        <br /><br />
                        <div align="center">
                            <div className="container">
                                <div className="row">
                                    <div >
                                        <div className="card">

                                            <div className="card-body text-center">
                                                <img className="avatar rounded-circle" style={{ width: '200px', height: '200px' }} src={require(`../../../images/members/Senior members/${this.props.obj.number}`)} alt="Bologna" />
                                                <h4 className="card-title">{this.props.obj.name}</h4>
                                                {/* <h6 className="card-subtitle mb-2 text-muted">Famous Actor</h6> */}
                                                <div className="card-text">
                                                    <ul>
                                                        {
                                                            this.props.obj.content.map((x, key) => {
                                                                return (
                                                                    <li>{x}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>

                                                </div>
                                                <button className="btn bg-base text-white" onClick={this.props.closeModal}>Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }

    }
}

export default ModalBox;