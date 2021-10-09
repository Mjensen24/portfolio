import './App.css';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FiCoffee, FiPaperclip } from 'react-icons/fi';
import { BsCodeSlash, BsChatLeftText, BsBook, BsEye } from 'react-icons/bs';

function App() {
  return (
    <div className="app-container">
      <div id='about'></div>
      <div className="navbar-container">
        <div className="navbar-info">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="about-container">
        <div className="about-info">
          <h1>About</h1>
          <div className="about-me">
            <div className="about-me_container">
              <div className="about-me_photo" onLoad></div>
              <div className="about-me_info">
                <h1>Hi Friends</h1>
                <p>My name is Michael and I'm a fullstack developer with a passion for creation. My experience includes Javascript, Python, CSS, HTML, React/Redux, PSQL, and sequelize. I love being challenged by a problem and using my creativity and ingenuity to solve it, including debugging and clearning up my code. There is no better feeling in the world than spending hours attempting to fix a problem and watching the code run as you imagined and designed.</p>
                <p>My name is Michael and I'm a fullstack developer with a passion for creation. My experience includes Javascript, Python, CSS, HTML, React/Redux, PSQL, and sequelize. I love being challenged by a problem and using my creativity and ingenuity to solve it, including debugging and clearning up my code. There is no better feeling in the world than spending hours attempting to fix a problem and watching the code run as you imagined and designed. There is no better feeling in the world than spending hours attempting to fix a problem and watching the code run as you imagined and designed.</p>
                <p>I hope to hear form you soon! This is test writing just to make space please ignore this for now.</p>
                <div className="button-container">
                  <button className="download-button"> <FiPaperclip /> Download Resume</button>
                  <button className="contact-button"> <BsChatLeftText /> Contact Me</button>
                </div>
              </div>
            </div>
          </div>
          <div className="about-tab_container">
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="computer-img" src="../images/pixel-book.png" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <BsBook />
                <h2>Always improving</h2>
                <h4>When I'm not working I spend my days studying and building. This website is constantly evolving, comeback in a few days and you might notice a few changes. Most nights I can be found at my desk staying up far too late to solve that "last" problem.</h4>
              </div>
            </div>
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="coffee-img" src="../../images/pixel-coffee.jpg" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <FiCoffee />
                <h2>Fueled By Coffee</h2>
                <h4>Coffee is my one and true vice. I would never get anything done without my fix. I may or may not have more coffee gear than my local coffee shop. My go to drink is a classic macchiato espresso. Keep an eye out for a little coffee easter egg hidden around here somewhere.</h4>
              </div>
            </div>
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="code-img" src="../../images/pixel-keyboard.png" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <BsCodeSlash />
                <h2>A Little Obsessive</h2>
                <h4>Once I get into something, I REALLY get into it. If you're looking at this site at 2 am don't be surprised if you see a change mid scroll. I probably just had an "Ah ha!" moment and hopped out of bed to make a quick adjustment. Often times I dream about fixing bugs, still not sure if this is a good or bad thing.</h4>
              </div>
            </div>
            <div className="about-tab">
              <div className='about-tab_photo'>
                <img className="computer-img" src="../../images/comp.png" alt="The one and only"></img>
              </div>
              <div className="about-tab_content">
                <HiOutlineDesktopComputer />
                <h2>I Love Computers</h2>
                <h4>When I'm not working I spend my days studying and building. This website is constantly evolving, comeback in a few days and you might notice a few changes. Most nights I can be found at my desk staying up far too late to solve that "last" problem.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="skills-container">
        <div className="skills-info">
          <h1>Skills</h1>
          <div className="skills-tab_container">
            <div className="skills-tab">
              <img src="../../images/javascript_icon.png" alt="The one and only"></img>
              <h3>JavaScript</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/python-icon.png" alt="The one and only"></img>
              <h3>Python</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/html-icon.png" alt="The one and only"></img>
              <h3>HTML</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/css-icon.png" alt="The one and only"></img>
              <h3>CSS</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/react-icon.png" alt="The one and only"></img>
              <h3>React</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/redux-icon.png" alt="The one and only"></img>
              <h3>Redux</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/node-icon.png" alt="The one and only"></img>
              <h3>NodeJS</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/flask.png" alt="The one and only"></img>
              <h3>Flask</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/PSQL.png" alt="The one and only"></img>
              <h3>PSQL</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/sequelize.png" alt="The one and only"></img>
              <h3>Sequelize</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/sql-alchemy.png" alt="The one and only"></img>
              <h3>SQLAlchemy</h3>
            </div>
            <div className="skills-tab">
              <img src="../../images/Git_icon.svg.png" alt="The one and only"></img>
              <h3>Git</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects-container">
        <h1>Projects</h1>
        <div className="projects-tab_container">
          <div className="project-tab_left">
            <div className="project-photo_left instavibes"></div>
            <div className="project-info">
              <h2>InstaVibes</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed. Elit duis tristique sollicitudin nibh. Eu consequat ac felis donec. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tortor id aliquet lectus proin nibh nisl. Proin fermentum leo vel orci porta non pulvinar neque. Enim ut sem viverra aliquet eget sit amet.</h4>
              <div className="project-button_container">
                <button className="demo-button"> <BsEye />Demo</button>
                <button className="code-button"> <BsCodeSlash />Code</button>
              </div>
            </div>

          </div>
          <div className="project-tab_right">
            <div className="project-info">
              <h2>Sycamore Homes</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed. Elit duis tristique sollicitudin nibh. Eu consequat ac felis donec. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tortor id aliquet lectus proin nibh nisl. Proin fermentum leo vel orci porta non pulvinar neque. Enim ut sem viverra aliquet eget sit amet.</h4>
              <div className="project-button_container">
                <button className="demo-button"> <BsEye />Demo</button>
                <button className="code-button"> <BsCodeSlash />Code</button>
              </div>
            </div>
            <div className="project-photo_right sycamore"></div>
          </div>
          <div className="project-tab_left">
            <div className="project-photo_left ironlogs"></div>
            <div className="project-info">
              <h2>Iron Logs</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed. Elit duis tristique sollicitudin nibh. Eu consequat ac felis donec. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tortor id aliquet lectus proin nibh nisl. Proin fermentum leo vel orci porta non pulvinar neque. Enim ut sem viverra aliquet eget sit amet.</h4>
              <div className="project-button_container">
                <button className="demo-button"> <BsEye />Demo</button>
                <button className="code-button"> <BsCodeSlash />Code</button>
              </div>
            </div>
          </div>
          <div className="project-tab_right">
            <div className="project-info">
              <h2>Infinium</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed. Elit duis tristique sollicitudin nibh. Eu consequat ac felis donec. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tortor id aliquet lectus proin nibh nisl. Proin fermentum leo vel orci porta non pulvinar neque. Enim ut sem viverra aliquet eget sit amet.</h4>
              <div className="project-button_container">
                <button className="demo-button"> <BsEye />Demo</button>
                <button className="code-button"> <BsCodeSlash />Code</button>
              </div>
            </div>
            <div className="project-photo_right infinium"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
