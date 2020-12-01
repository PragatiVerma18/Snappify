import React, { Component } from "react";
import InputForm from "./Components/InputForm";
import axios from "axios";

export default class App extends Component {
  state = {
    screenshot: null, 
  };


   downloadImage = e => {
    console.log(e.target.href);
    fetch(this.state.screenshot, {
      method: "GET",
      headers: {}
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
