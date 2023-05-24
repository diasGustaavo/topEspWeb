import React from 'react';

class Temporizador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            hora: new Date()
        });
    }

    render() {
        return (<div>
            <h1> {this.state.hora.toLocaleTimeString()}</h1>
        </div>);
    }
}

export default Temporizador;
