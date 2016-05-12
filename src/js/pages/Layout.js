import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Change my value",
    };
  }

  changeTitle(title){
    this.setState({title});
  }


  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-md-12">
              {this.props.children}
            </div>
          </div>
          <Footer changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        </div>
      </div>

    );
  }
}
