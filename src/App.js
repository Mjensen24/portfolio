import './App.css';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FiCoffee } from 'react-icons/fi';
import { BsCodeSlash } from 'react-icons/bs';

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <div className="navbar-info">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Skills</h1>
          <h1>Projects</h1>
          <h1>Contact</h1>
        </div>
      </div>
      <div className="about-container">
        <div className="about-info">
          <h1>About</h1>
          <div className="about-me">
            <div className="about-me_container">
              <div className="about-me_photo"></div>
              <div className="about-me_info">
                <h1>Hi Friends</h1>
                <p>My name is Michael and I'm a fullstack developer with a passion for creation. My experience includes Javascript, Python, CSS, HTML, React/Redux, PSQL, and sequelize. I love being challenged by a problem and using my creativity and ingenuity to solve it, including debugging and clearning up my code. There is no better feeling in the world than spending hours attempting to fix a problem and watching the code run as you imagined and designed.</p>
                <p>My name is Michael and I'm a fullstack developer with a passion for creation. My experience includes Javascript, Python, CSS, HTML, React/Redux, PSQL, and sequelize. I love being challenged by a problem and using my creativity and ingenuity to solve it, including debugging and clearning up my code. There is no better feeling in the world than spending hours attempting to fix a problem and watching the code run as you imagined and designed. There is no better feeling in the world than spending hours attempting to fix a problem and watching the code run as you imagined and designed.</p>
                <p>I hope to hear form you soon! This is test writing just to make space please ignore this for now.</p>
                <div className="button-container">
                  <button className="download-button">Download Resume</button>
                  <button className="contact-button">Contact Me</button>
                </div>
              </div>
            </div>
          </div>
          <div className="about-tab_container">
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="computer-img" src="../comp.png" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <HiOutlineDesktopComputer />
                <h2>Always improving</h2>
                <h4>When I'm not working I spend my days studying and building. This website is constantly evolving, comeback in a few days and you might notice a few changes. Most nights I can be found at my desk staying up far too late to solve that "last" problem.</h4>
              </div>
            </div>
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="coffee-img" src="../pixel-coffee.jpg" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <FiCoffee />
                <h2>Fueled By Coffee</h2>
                <h4>Coffee is my one and true vice. I would never get anything done without my fix. I may or may not have more coffee gear than my local coffee shop. My go to drink is a classic macchiato espresso. Keep an eye out for a little coffee easter egg hidden around here somewhere.</h4>
              </div>
            </div>
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="code-img" src="../code.png" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <BsCodeSlash />
                <h2>A Little Obsessive</h2>
                <h4>Once I get into something, I REALLY get into it. If you're looking at this site at 2 am don't be surprised if you see a change mid scroll. I probably just had an "Ah ha!" moment and hopped out of bed to make a quick adjustment. Often times I dream about fixing bugs, still not sure if this is a good or bad thing.</h4>
              </div>
            </div>
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="computer-img" src="../comp.png" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <HiOutlineDesktopComputer />
                <h2>Always improving</h2>
                <h4>When I'm not working I spend my days studying and building. This website is constantly evolving, comeback in a few days and you might notice a few changes. Most nights I can be found at my desk staying up far too late to solve that "last" problem.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-info">
          <h1>Skills</h1>
          <div className="skills-tab_container">
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
            <div className="skills-tab">Box</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
