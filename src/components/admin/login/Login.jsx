import React, { Component } from 'react';
import './LoginStyles.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-form">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <div className="avatar bg-base"><img style={{width:'100%', height:'100%'}} src={require('../../../images/uclangrad2018.png')} /></div>
                        <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        {/* <div className="form-group small clearfix">
                            <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        </div> */}
                        <input type="submit" className="btn btn-primary btn-block btn-lg" defaultValue="Login" />
                    </form>
                    <div className="text-center small">Don't have an account? <a href="#">Sign up</a></div>
                </div>
            </div>
        );
    }
}

export default Login;