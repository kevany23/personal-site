import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './ProjectSection.css';
import sampleScreen from '../public/quizdraftSample.png';

class ProjectSection extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron style = {{
          padding: "10px",
          margin: "auto",
          width: "60%",
          alignItems: "center"
        }}>
          <h4>Sample Project</h4>
          <div class="projectDiv">
            <div class="projectDescription">
              <h5>QuizDraft</h5>
              <p>
                A web-based application that helps you study, QuizDraft lets you
                build practices quizzes. You can create practice questions and answers
                for these practices quizzes. The app also lets you use flash cards
                as well!
              </p>
              <p>
                The project was developed with VueJS, Bootstrap, ExpressJS, and MongoDB.
              </p>
              <p>
                You can check out the project in the link below:
              </p>
              <a href="https://quizdraft-site-48e04c.netlify.app/">Link to Project Here</a>
              <br/>
              <br/>
              <p>Sample image below:</p>
            </div>
            <img src={sampleScreen} alt="Sample Screen"
              width="700px"
            >
            </img>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default ProjectSection;