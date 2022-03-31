import React, { Component } from "react";

class DemoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      language: "vue",
      gender: "men",
      hobby: "Reading",
    };
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleLangChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  handleHobbyChange = (event) => {
    this.setState({
      hobby: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="men">Men</label>
          <input
            type="radio"
            id="men"
            value="Men"
            checked={this.state.gender === "Men"}
            onChange={this.handleGenderChange}
          />
          <label htmlFor="women">Women</label>
          <input
            type="radio"
            id="women"
            value="Women"
            checked={this.state.gender === "Women"}
            onChange={this.handleGenderChange}
          />
        </div>
        <div>
          <label htmlFor="swimming">Swimming </label>
          <input
            type="checkbox"
            id="swimming"
            value="Swimming"
            checked={this.state.hobby === "Swimming"}
            onChange={this.handleHobbyChange}
          />
          <label htmlFor="reading">Reading </label>
          <input
            type="checkbox"
            id="reading"
            value="Reading"
            checked={this.state.hobby === "Reading"}
            onChange={this.handleHobbyChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={this.state.language}
            onChange={this.handleLangChange}
          >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
export default DemoForm;
