import React from "react";


export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {name: "I'm changing in 3 seconds"};
  }

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    setTimeout(() => {
      this.setState({name:"I changed"});
    }, 3000);


    return (
      <footer style={footerStyles}>
        <hr/>
        <div class="row">
          <div class="col-lg-12">
            <h3>{this.props.title}</h3>
            <p>Type in inputfield to change this title:</p>
            <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            <br/>
            <hr/>
            <br/>
            <p>{this.state.name}</p>
            <br/>

            <p>Copyright &copy; All Products reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}
