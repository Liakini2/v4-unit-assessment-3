import React, {Component} from "react";

class BookList extends Component{
    render(){
        let mappedBooks = this.props.books.map((element, index)=>{
            return(
            <div className="bookInfo" key={index}>
                <div className='book'>
                    <img 
                    className="bookImage" 
                    alt="Book" 
                    src={element.img}
                    onClick={()=>{
                        let value = element.title
                        this.props.addToShelf(value)
                    }}
                    />
                    <p className='text'>Title: {element.title}</p>
                    <p className='text'>Author: {element.author}</p>
                </div>
            </div>
            )
        })
        return(
            <div className="float bookList">
                {mappedBooks}
            </div>
        )
    }
}

export default BookList