import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            userInput:''
        }
    }

    handleChange=(value)=>{
        this.setState({
            userInput: value
        })
    }

    handleClick=()=>{
        this.props.filterBooks(this.state.userInput)
    }

    handleClear=()=>{
        this.setState({
            userInput: ''
        })
        this.props.reset()
    }

    render(){
        return(
            <div>
                <input 
                className="input"
                value = {this.state.userInput}
                onChange={(e)=>{this.handleChange(e.target.value)}}/>
                <button 
                className="input"
                onClick={()=>{this.handleClick()}}>
                    Search
                </button>
                <button 
                className="input"
                onClick={()=>{this.handleClear()}}>
                    Clear Search
                </button>
            </div>
        )
    }
}

export default SearchBar