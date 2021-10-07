import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("didmount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
    handleChange = e =>{
    this.setState({searchField:e.target.value})
  }
  render() {
    console.log("render");
    const {monsters, searchField} = this.state;

    const filteredmonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
       <SearchBox
       placeholder = "search monsters"
       handleChange={this.handleChange}>
         </SearchBox>
        <CardList monsters={filteredmonsters}></CardList>
      </div>
    );
  }
}

export default App;
