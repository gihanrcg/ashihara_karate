import React, { Component } from 'react';
import './FooterStyles.css'

class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>Location</h6>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.315360299162!2d79.86000091472015!3d6.852750795047702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b08922bf6ff%3A0x39ad4a4829a425c2!2sDehiwala%20YMCA!5e0!3m2!1sen!2slk!4v1589001778078!5m2!1sen!2slk" width={400} height={300} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            <div className="col-xs-6 col-md-6">
                                <h6>Reach out to us</h6>
                                <ul className="footer-links">
                                    <br />
                                    <li>Mobile &nbsp;&nbsp;&nbsp;+94 (0) 777315785</li>
                                    <br />
                                    <li>LandLine +94 (0) 112727108</li>
                                    <br />
                                    <li>Fax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 (0) 112765559</li>
                                    <br />
                                    <li>Address&nbsp;&nbsp;&nbsp;97/6, Galle Road, Dehiwala (Postal Coad: -10350), Sri Lanka.</li>


                                </ul>
                            </div>

                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright © 2020 All Rights Reserved by
                <a href="/"> SRI LANKA KARATE
                            KAI KAN ASHIHARA KARATE</a>.
              </p>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>


            </div >
        );
    }
}

export default Footer;