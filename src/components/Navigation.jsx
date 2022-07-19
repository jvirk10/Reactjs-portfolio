import React from 'react';
import Switch from '@material-ui/core/Switch';
import configs from "./data/backgroundConfig";

function Navigation({ currentPage, handlePageChange, theme, setTheme, setConfig, }) {

  const linkStyle = { color: "#FFFFFF", fontSize: "20px" };
  const darkLinkStyle = { color: "#D9D9D9", fontSize: "20px" };
  const navStyle = { backgroundColor: "#17a2b8" };
  const darkNavStyle = { backgroundColor: "#284B63" };

  const handleThemeSwitch = (e) => {
      e.preventDefault();

      if (theme === true) {
          setTheme(false);
          setConfig(configs.spaceConfig);
      } else {
          setTheme(true);
          setConfig(configs.defaultConfig);
      }
  }

    return (
      <ul className="nav nav-tabs" id="list" style={{ display: "flex", justifyContent: "space-between"}}>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </button>
        </li>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
  
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </button>
        </li>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </button>
        </li>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </button>
        </li>
      </ul>
    );
  }
  
  export default Navigation;