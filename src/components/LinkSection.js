import React from 'react';
//import './Home.css';
//import * as Bootstrap from 'react-bootstrap';
import { Jumbotron, Card } from 'react-bootstrap';
import './LinkSection.css';

function SocialLink(props) {
  return (
    <div className="linkDiv">
      <a href={props.url}>
        <Card className="socialLink">
          <div style={{ margin: "auto"}}>
            {props.name}
          </div>
        </Card>
      </a>
    </div>
  );
}

class LinkSection extends React.Component {
  render() {
    return (
      <div className="linkSection">
        <Jumbotron style={{
          padding: "10px",
          margin: "auto",
          width: "60%"
        }}>
          <h4 style={{ textAlign: "center" }}>Links</h4>
          <SocialLink name="LinkedIn" url=""/>
          <SocialLink name="GitHub" url=""/>
          <SocialLink name="LeetCode" url=""/>
        </Jumbotron>
      </div>
    );
  }
}

export default LinkSection;