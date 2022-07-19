import React from 'react';
import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects">

    <article id="Music App">
      <div id="pitch-logo">
        <h2><a href="https://github.com/Project01-Team14/Music-Slayers" class="white-font">Music Slayers</a></h2>
        <h4>HTML, CSS , JavaScript, jQuery,Tailwind css,Google charts,Music APIs</h4>
        </div>
    </article>


    <article id="Reimagined system">
      <div id="moat-logo">
        <h2><a href="https://github.com/project0204/reimagined-system" class="white-font">Reimagined</a></h2>
        <h4>JavaScript, Handlebars, Express.js, SQL, Sequelize(ORM)</h4>
      </div>   
    </article>

    <article id="E-commerce website">
      <div id="social-logo">
        <h2><a href="https://github.com/jvirk10/E-commerce-Website" class="white-font">E-commerce</a></h2>
        <h4> JavaScriptMongoDB, JavaScript, Express.js, Mongoose(ODM)</h4>
      </div>   
    </article>

    </div>
  );
}