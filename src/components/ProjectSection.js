import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './ProjectSection.css';
import sampleScreenQuizdraft from '../public/quizdraftSample.png';
import sampleScreenPomodoro from '../public/pomodoroSample.png';
import sampleScreenZiconnect from '../public/ziconnectSample.png';

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
          <h4>Sample Projects</h4>
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
            <img src={sampleScreenQuizdraft} alt="Quizdraft Screen"
              width="75%"
            >
            </img>
            <div class="projectDescription" style={{marginTop: "10px"}}>
              <h5>Pomodoro Timer</h5>
              <p>
                A web-based application that lets you practice the
                <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique"> Pomodoro Technqiue</a>.
              </p>
              <p>
                The project was developed with VueJS.
              </p>
              <p>
                This project also serves as a prototype for a larger ongoing project. Details are TBA!
              </p>
              <a href="https://pomodoro-fbcf60.netlify.app/">Link to Project Here</a>
              <br/>
              <br/>
              <p>Sample image below:</p>
            </div>
            <img src={sampleScreenPomodoro} alt="Pomodoro Screen"
              width="60%"
            >
            </img>
            <div class="projectDescription" style={{marginTop: "10px"}}>
              <h5>Ziconnect</h5>
              <p>
                An event planner web application, Ziconnect allows you to create events,
                invite users, and arrange food and rides for the events. Developed along with Team ZICO!
              </p>
              <p>
                The project was developed with AngularJS and Firebase.
              </p>
              <p>
                You can check out the project in the link below:
              </p>
              <a href="https://github.com/kevany23/Ziconnect">Link to Project Here</a>
              <br/>
              <br/>
              <a href="https://www.youtube.com/watch?v=Jx7rcn58QNI">Youtube Link</a>
              <br/>
              <br/>
              <p>Sample image below:</p>
            </div>
            <img src={sampleScreenZiconnect} alt="Ziconnect Screen"
              width="80%"
            >
            </img>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default ProjectSection;