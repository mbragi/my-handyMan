// import './SearchBox.js'
import { Component } from 'react';
import './SearchBox.css'
import CustomButton from '../CustomButtton/Custom-button.js';
import CustomInput from '../CustomInput/Custom-Input.js';

class SearchBox extends Component {
    constructor(){
        super()
        this.state={
            filteredHandy:"",
        }
    }

    onInputChange = (event) => {
        this.setState({ filteredHandy: event.target.value })
    }

    updateHomeState = (event) => {
        event.preventDefault();
        if (!this.state.filteredHandy) return;
        this.props.onValueChange(this.state.filteredHandy)
    }

    clearSearch = () => {
        this.props.resetInput();
        this.setState({filteredHandy: ""});
    }

        render(){

        return(
            <form onSubmit={this.updateHomeState}  className="searchBox">
                <div className="clearSearch">
                    <CustomInput id="cInput" onChange={this.onInputChange}  placeholder="I am looking for ..." style={{width:"25.5rem", height:"2.3rem", outline:"none"}} value={this.state.filteredHandy}/>
                    <button id="button" onClick={this.clearSearch} >x</button>
                </div>
                    <CustomButton type="submit" title ="Search" style={{ width:"9rem",height:"2.7rem" }} />
            </form>
        );
    }
}

export default SearchBox;




