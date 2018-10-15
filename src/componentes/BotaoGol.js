import React from 'react';

export default class BotaoGol extends React.Component {
    gol(event){
        event.preventDefault();
        this.props.marcarGol();
    }


    render(){
        return (
            <div>
                <button onClick={this.gol.bind(this)}>Gol</button>
            </div>
        );
    }
}