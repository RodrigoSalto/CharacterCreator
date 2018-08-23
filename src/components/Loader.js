import React, { Component } from 'react';

import logo from './../graphic_assets/logo.jpg';
import '../css/loader.css'

class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.check = setInterval(() => {
            if (window.loaded) {
                clearInterval(this.check)
                this.setState({ loading: false })
                return;
            }
        }, 1000);
    }


    render() {
        if (this.state.loading) {
            return (
                <div className="blackscreen abs top left">
                    <div className="abs circle">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            );
        } else {
            return (
                <div />
            );
        }

    }
}
export default Loader;
