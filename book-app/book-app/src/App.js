import { Component } from 'react';
import './App.css';
import data from './data'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'


class App extends Component{
  constructor(){
    super()
    this.state={
      books: data,
      shelf: [],
      message: `Your Shelf is Empty`
    }
  }

  addToShelf=(value)=>{
    let shelf = this.state.shelf
    if(!shelf.includes(value)){
      shelf.push(value)
      document.getElementById('button').style.visibility = 'visible'
    }
    this.setState({
      shelf: shelf,
      message: ''
    })
  }

  clearShelf=()=>{
    document.getElementById('button').style.visibility = 'hidden'
    this.setState({
      shelf: [],
      message: `Your Shelf is Empty`
    })
  }

  filterBooks=(input)=>{
    let books = this.state.books
    let filteredBooks = books.filter((book)=>{
      return book.title.toLowerCase().includes(input.toLowerCase()) || book.author.toLowerCase().includes(input.toLowerCase())
    })

    console.log(filteredBooks)
    this.setState({
      books: filteredBooks
    })
  }

  reset=()=>{
    this.setState({
      books: data
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <BookList books={this.state.books} addToShelf={this.addToShelf}/>
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} message={this.state.message}/>
      </div>
    )
  }
}

export default App;
