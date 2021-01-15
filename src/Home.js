import React from 'react';
import './Home.css';
import LinkSection from './components/LinkSection';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  render() {
    return (
      <div id="mainDiv">
        <div className="embedded">
        <h1>Kevan Yang</h1>
        <h5 style={{textAlign: "center"}}>
          Software Engineer
        </h5>
        </div>
        <LinkSection/>
        <div style={{ textAlign: "center"}}>
          <p>
            This site was made with ReactJS.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;