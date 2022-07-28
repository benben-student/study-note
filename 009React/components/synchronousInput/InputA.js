import React from "react";
import InputB from "../statePromotion/InputB";
class InputA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <p>A</p><input value={inputValue} onChange={this.onChange} /><br />
                <InputB inputValue={this.state.inputValue} />
            </div>
        )
    }
}
export default InputA