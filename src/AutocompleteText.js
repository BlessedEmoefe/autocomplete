import React from "react";

export default class AutoCompletText extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["Blessed", "Daniel", "Peace", "Jackson"];
    this.state = {
      suggestion: [],
    };
  }
  onTextChanged = (e) => {
    const value = e.target.value
    if(value.length===0){

    }
  };

  render() {
    return (
      <div>
        <input onChange={this.onTextChanged} type="text" />
        <ul>
          {this.items.map((item) => (
            <li>{item}</li>
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
