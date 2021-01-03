import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputForm from "./Components/InputForm";
import getScreenshot from './services/screenshot';

export default class App extends Component {
  state = {
    screenshot: null,
  };

  getScrnsht = (e) => {
    e.preventDefault();
    const link = e.target.elements.link.value;
    var w = window.innerWidth;
    var h = window.innerHeight;
    getScreenshot(link, w, h)
      .then((res) => {
        const screenshot = res.data.screenshot;
        this.setState({ screenshot });
      });
  };

   downloadImage = (e) => {
    console.log(e.target.href);
    fetch("https://cors-anywhere.herokuapp.com/" + this.state.screenshot, {
      method: "GET",
      cache:"no-cache",
      credentials: 'same-origin',
      headers: {"Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Snappify.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })



      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="block">
          <InputForm getScrnsht={this.getScrnsht} />
          {this.state.screenshot ? (
            <div>
              <button onClick={this.downloadImage} className="btn btn-primary btn-lg  search-btn">
                Download</button>
              <img src={this.state.screenshot} alt="link" />
            </div>
          ) : (
            <p>Please enter your link.</p>
          )}
        </div>
      </div>
    );
  }
}
