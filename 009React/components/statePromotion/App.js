import React from 'react';
import InputA from './InputA';
import InputB from './InputB';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    onChange = (inputValue) => {
        this.setState({
            inputValue
        })
    }

    render() {
        return (
            <div>
                <InputA inputValue={this.state.inputValue} onChange={this.onChange} />
                <InputB inputValue={this.state.inputValue} onChange={this.onChange} />
            </div>
        );
    }
}

export default App;
