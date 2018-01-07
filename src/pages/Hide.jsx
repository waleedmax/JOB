import React, { Component } from 'react';



const styles = {
    transition: 'all 0.3s ease-out'
};

export class Hide extends React.Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
            scale: 1
        };
    }

    onHide() {
        this.setState({
            opacity: 0
        });
    }

    onScale() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        });
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-2">
                        <ul className="left">
                            <li className="active"><a href="/">PAGE 1</a></li>
                            <li><a href="/Home">PAGE 2</a></li>
                            <li><a href="#">PAGE 3</a></li>
                            <li><a href="#">PAGE 4</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <div className="card deep-purple z-depth-2"
                                 style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>
                                <div className="card-content white-text">
                                    <span className="card-title">HELLO WALEED</span>
                                    <p>Nice work</p>
                                </div>
                                <div className="card-action">
                                    <a onMouseOver={this.onScale.bind(this)} style={{cursor: 'pointer'}}><img src="data:image/jpeg;base64,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"></img></a>
                                    <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>SCALE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Hide;