import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallete.css'

export default class Pallete extends Component {

    render() {
        const colors = this.props.colors.map(it => <ColorBox background={it.color} name={it.name}></ColorBox>)
        return (
            <div className="Pallete">
                <div className="Pallete-colors">
                    {colors}
                </div>
            </div>
        )
    }
}

