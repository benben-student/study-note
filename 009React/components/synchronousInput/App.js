import React from 'react';
import InputA from './InputA';
class App extends React.Component {
    render() {
        return (
            <div>
                <InputA InputA={this.InputA} />
            </div>
        );
    }
}

export default App;
