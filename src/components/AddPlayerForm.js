import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    playerInput = React.createRef(); // we create a Ref to directly control or use the attached DOM element

    handleValueChange = (e) => {
        this.setState({value: e.target.value}); // target property points to the underlying input element in the DOM so we can read the value from it
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value); //this.playerInput.current.value
        this.setState({value: ''});
    }

    render() {
        console.log(this.playerInput);
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    ref={this.playerInput} // this puts a reference to the input on the AddPlayerForm class
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;