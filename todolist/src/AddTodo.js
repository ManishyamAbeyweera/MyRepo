import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    document.getElementById("aaa").value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo: </label>
          <input type="text" id="aaa" onChange={this.handleChange} />
        </form>
      </div>

      /*<div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                class="validate"
              ></input>
              <label for="first_name" class="active">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate"></input>
              <label for="last_name" class="active">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                disabled
                value="I am not editable"
                id="disabled"
                type="text"
                class="validate"
              ></input>
              <label for="disabled" class="active">
                Disabled
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate"></input>
              <label for="password" class="active">
                Password
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate"></input>
              <label for="email" class="active">
                Email
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              This is an inline input field:
              <div class="input-field inline">
                <input id="email_inline" type="email" class="validate"></input>
                <label for="email_inline" class="active">
                  Email
                </label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Helper text
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>*/
    );
  }
}

export default AddTodo;
