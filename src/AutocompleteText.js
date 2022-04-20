import React from "react";

export default class AutoCompletText extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["Blessed", "Daniel", "Peace", "Jackson"];
  }
  render() {
    return (
      <div>
        <input type="text" />
        <ul>
          {this.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
