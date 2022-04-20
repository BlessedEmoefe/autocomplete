import React from "react";

export default class HideableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  render() {
    return <div>{this.props.text}</div>;
  }
}
