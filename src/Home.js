import React from 'react';
import './Home.css';
import LinkSection from './components/LinkSection';
import ProjectSection from './components/ProjectSection';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  render() {
    return (
      <div id="mainDiv">
        <div className="embedded">
        <h1>Kevan Yang</h1>
        <h5>
          Software Engineer, Web Developer
        </h5>
        </div>
        <LinkSection/>
        <ProjectSection/>
        <div style={{ 
          fontSize: "0.8em",
          marginTop: "10px"
          }}>
          <p>
            This site was made with ReactJS.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;