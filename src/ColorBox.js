import React, { Component } from 'react';
import './ColorBox.css'

export default class ColorBox extends Component {
    render() {
        const { name, background } = this.props;
        return (
            <div style={{ background }} className="ColorBox" >
                <div className="ColorBox-container">
                    <div className="ColorBox-name">
                        <span >{name}</span>
                    </div>
                    <button className="ColorBox-copy-btn">Copy</button>
                </div>
                <span className="ColorBox-more">MORE</span>
            </div>
        )
    }
}
