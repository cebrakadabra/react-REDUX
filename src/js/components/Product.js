import React from "react";

export default class Product extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { live, edit, text } = this.props;

    const icon = live ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span> - is live: {icon}</span>
      </li>
    );
  }
}
