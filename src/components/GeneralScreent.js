import React, { Component } from 'react';
import './Styles/GeneralScreent.styles.css';

/* Component that contains the buttons and the main text */
export class GeneralScreent extends Component {
    constructor(props) {
        super(props);
        this.state = { colorType: '' };
    }

    colorChange = (color) => {
        /* function that sets the state for the main text */
        this.setState({ colorType: color });
    }
    render() {
        return (
            <>
                <h1 className={`${this.state.colorType == 'classRed' ? 'classRed' : this.state.colorType == 'classBlue' ? 'classBlue' : ''}`}>
                    Prueba Básica React
                </h1>
                <div className='row'>
                    <button className='classBgRed' onClick={() => { this.colorChange('classRed') }}>
                        Texto rojo
                    </button>
                    <button className='classBgBlue' onClick={() => { this.colorChange('classBlue') }}>
                        Texto azúl
                    </button>
                </div>
            </>
        )
    }
}