import React, { Component } from 'react';
import AddNews from './manage/addNews/AddNews';

class AdminPanel extends Component {


    constructor(props) {
        super(props);

        if (localStorage.getItem('karate-token') == null) {
            window.location.href = "/admin-login"
        }
    }


    componentDidMount() {

        let token = localStorage.getItem("karate-token");
        this.state = {
            token: token
        }
    }

    render() {
        if (localStorage.getItem('karate-token')) {
            return (
                <div>
                   <AddNews/>
                </div>
            )
        } else {
            window.location.href = "/admin-login";
        }



    }
}

export default AdminPanel;