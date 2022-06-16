import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Mani", age: 23, belt: "Brown", id: 1 },
      { name: "Nims", age: 22, belt: "Grey", id: 2 },
      { name: "Chamal", age: 20, belt: "Black", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    //console.log(ninja);
    ninja.id = Math.random();
    let copy = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: copy,
    });
  };

  deleteNinja = (id) => {
    //console.log(id);
    let newNinjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: newNinjas,
    });
  };

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component Updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome......</p>
        <div className="Ninjalist">
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        </div>
        <div className="form">
          <AddNinja addNinja={this.addNinja} />
        </div>
      </div>
    );
    /* return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome......</p>
        <Ninjas name="Harry" age="30" belt="Brown" />
        <br />
        <Ninjas name="Mani" age="23" belt="Black" />
      </div>
    ); */
  }
}

export default App;
