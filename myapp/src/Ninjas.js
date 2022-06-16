import { render } from "@testing-library/react";
import React from "react";

const Ninjas = (props) => {
  const { ninjas, deleteNinja } = props;
  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <div><button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button></div>
          <br />
        </div>
      );
    }
  });
  return <div className="ninja-list">{ninjaList}</div>;

  /* render() {
    //console.log(this.props);
    const {name, age, belt} = this.props;
    return (
      <div className="ninja">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    );
  } */
};

export default Ninjas;
