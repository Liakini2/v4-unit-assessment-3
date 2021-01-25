import React, {Component} from "react"

class Shelf extends Component{
    render(){
        let mappedTitles = this.props.shelf.map((element)=>{
            return(
                <h4>{element}</h4>
            )
        })
        return(
            <div className="float shelf">
                <h2>Your Shelf</h2>
                <button
                id='button'
                onClick={()=>{this.props.clearShelf()}}>
                    clear shelf
                </button>
                <p>{this.props.message}</p>
                <p>{mappedTitles}</p>
            </div>
        )
    }
}

export default Shelf