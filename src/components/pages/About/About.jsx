import React from 'react';
import "./About.css"
import profilePic from "../../img/profilepic.jpg";
import powerPic from "../../img/powerlifting.jpg";
import frontendPic from "../../img/frontend.webp";
import backendPic from "../../img/backend.webp";
import databasePic from "../../img/database.png";
import gitPic from "../../img/control.png";

export default function About(currentPage, handlePageChange) {
  return (
    <div className="about" id="coffee">
      <h1>About Page</h1>
      <div id="pictures">
      <img src={profilePic} alt="profile" width="" height="200" />
      <img src={powerPic} alt="profile" width="" height="200" />
      </div>
      <div id="aboutText">
      <h1>My name is Jasmine Virk</h1> 
      <h1>A Full-Stack Web developer from Toronto, Ontario. ✨</h1>
      <p>I’m currently performing Full-Stack Web Development using HTML, CSS and JavaScript, Node.js and their frameworks,libraries! 🌱</p> 

      </div>
      <h1>Skills</h1>

      <div className="row">
      <div className="col-sm-3">
        <div id="frontend" className="card">
          <img src={frontendPic} className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Frontend Development Stack</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">React</li>
          </ul>
          </div>    
        </div>
        </div>

        <div className="col-sm-3">
        <div id="backend" className="card">
        <img src={backendPic} className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Backend Development Stack</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">Node.js</li>
          </ul>
          </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div id="database" className="card">
        <img src={databasePic} className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Database ,Storage</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">SQL</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">ORM ,ODM (Sequelize, Mongoose)</li>
          </ul>
          </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div id="control" className="card">
        <img src={gitPic} className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Control ,Tests</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Git</li>
              <li className="list-group-item">Jest</li>
              <li className="list-group-item">npm</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}