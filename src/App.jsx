import './App.css'
import {Projects} from "./DisplayProjects.jsx"

function App() {

  return (
    <>
    <div className = "title"> 
    <div className = "nameandbio">
    <div className = "imgandlinks">
    <img className = "profile-img" src="portfolio-img.jpg"></img>
    <div className = "links">
      <a href="https://drive.google.com/file/d/1jACdRYIoO1YLkvJGOTylGNgijhLR_4zo/view?usp=drive_link" target = "_blank">Resume</a>
      <a href="https://github.com/jacksoncahn" target = "_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/jackson-cahn-6a9802210/" target = "_blank">LinkedIn</a>
      <a href="https://lmu.joinhandshake.com/profiles/50865600" target = "_blank">Handshake</a>
    </div>
    </div>
    <h2 className = "name">
        Jackson Cahn
    </h2>
    <p className = "bio">
    I am currently working towards a B.S. in Computer Science at Loyola Marymount
    University.
    </p>
    <div className = "skills">
      <h2>Technical Skills</h2>
      <p className = "techskills">Python | Git | Pygame | Blender | Unreal Engine 5 | Krita | JavaScript | HTML | CSS | Web Development with React</p>
      <h2>Soft Skills</h2>
      <p className = 'softskills'>Teaching | Writing | Mathematical Thinking | Collaboration | Self-motivated Learner | Customer Service | Adaptability | One-on-one teaching | Lesson planning & Implementation | Facilitating hands-on projects that encourage critical thinking and problem-solving.
      </p>    
    </div>
    </div>
      <Projects />
    </div>
    </>
  )
}
 
export default App
