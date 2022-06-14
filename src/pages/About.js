import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Renee Jiang</div>
            <div className="brief_description">
              Interests: Playing piano, reading, learning new languages
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}