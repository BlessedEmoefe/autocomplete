import React from "react";

export default class HideableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  toggleIsHidden(){
      hello
  }
  render() {
    return <div>{this.state.isHidden && this.props.text}</div>;
  }
}
