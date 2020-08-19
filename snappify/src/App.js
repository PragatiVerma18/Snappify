import React, { Component } from "react";
import InputForm from "./Components/InputForm";
import axios from "axios";

export default class App extends Component {
  state = {
    screenshot: null,
  };

  getScrnsht = (e) => {
    e.preventDefault();
    const link = e.target.elements.link.value;
    var w = window.innerWidth;
    var h = window.innerHeight;
    axios
      .get(
        `https://screenshotapi.net/api/v1/screenshot?url=${link}&token=REUXZIEP5RLXUEFS8PEF0RZTH15SJK5A&width=${w}&height=${h}&lazy_load=true&fresh=true`
      )
      .then((res) => {
        const screenshot = res.data.screenshot;
        this.setState({ screenshot });
      });
  };
  render() {
    return (
      <div className="container">
        <div className="block">
          <InputForm getScrnsht={this.getScrnsht} />
          {this.state.screenshot ? (
            <img src={this.state.screenshot} alt="link" />
          ) : (
            <p>Please enter your link.</p>
          )}
        </div>
      </div>
    );
  }
}
