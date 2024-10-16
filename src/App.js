import portrait from './pics/portrait.jpg';
import gworgImg from './pics/GWOrgTitle.png';
import { FaLinkedin, FaGithub, FaItchIo, FaJava, FaHtml5, FaPython, FaCss3, FaReact, FaBootstrap, FaNodeJs} from "react-icons/fa";
import { SiJavascript, SiGodotengine } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import './App.css';

function App() {

  return (
    <div className="App ">
      {/* Portfolio Header */}
      <div id="folioHeader" className="bg-primary mx-auto flex flex-col">
        <img className="size-60 self-center my-5 shadow-lg rounded-full border-7 border-solid border-highlight hover:border-white transition-all ease-linear" src={portrait} alt='Portrait' />
        <p className="my-3 font-headerTitle text-6xl text-center text-highlight transition-all ease-linear">Dallas Carlson</p>
        <p className='mb-5 font-headerTitle text-black text-2xl'> - Software Engineer - </p>
        <div id="headerLinks" className="flex flex-row space-x-20 mx-auto my-8">
          <a href='https://www.linkedin.com/in/dallas-carlson3601'><FaLinkedin className='size-7 text-highlight hover:size-10 transition-all ease-linear'/></a>
          <a href='http://github.com/DalPalCarl'><FaGithub className='size-7 text-highlight hover:size-10 transition-all ease-linear' /></a>
          <a href='https://dalpalcarl.itch.io'><FaItchIo className='size-7 text-highlight hover:size-10 transition-all ease-linear' /></a>
        </div>
      </div>

      {/* About Me */}
      <div className='bg-breakLight'><br/></div>

      <div id="aboutMeSection" className="bg-secondary mx-auto flex flex-col">
        <p className='font-headerTitle text-2xl my-4 text-highlight'>About Me</p>
        <div className='container flex flex-row justify-center mx-auto my-4 gap-20'>
          <div className='rounded-2xl bg-breakLight px-1 my-5 mx-4 md:w-3/5'>
            <p id='aboutMeText' className='font-headerTitle text-lg text-left p-4 text-highlight'>Hi, I'm Dallas. I'm a Computer Science graduate and aspiring Software Engineer. I'm deeply passionate
            about learning and problem-solving. Though I focus on web development, I have also dabbled in cybersecurity,
            game development, and more. I find designing and coding both technically and creatively appealing, and enjoy
            developing new projects, discovering new technologies, and the process that comes with it.</p>
          </div>
        </div>
      </div>

      {/* Areas of Interest */}
      <div className='bg-breakGreen'><br/></div>

      <div id='areasSection' className='bg-ternary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-primary'>Areas of Interest</p>
        <div id='areas' className='flex justify-around flex-col md:flex-row'>
          <div className='container mx-3 w-1/3'>
            <p className='font-headerTitle text-xl my-4 text-primary'>Frontend Development</p>
            <p className='font-headerTitle text-lg my-5 text-primary text-left'>Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod tincidunt nibh est felis varius elit. Rhoncus suspendisse mi turpis neque hac habitant nisl. Lacinia imperdiet ante vel odio nisl lacinia.</p>
          </div>
          <div className='container mx-3 w-1/3'>
            <p className='font-headerTitle text-xl my-4 text-primary'>Game Development</p>
            <p className='font-headerTitle text-lg my-5 text-primary text-left'>Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod tincidunt nibh est felis varius elit. Rhoncus suspendisse mi turpis neque hac habitant nisl. Lacinia imperdiet ante vel odio nisl lacinia.</p>
          </div>
          <div className='container mx-3 w-1/3'>
            <p className='font-headerTitle text-xl my-4 text-primary'>Test</p>
            <p className='font-headerTitle text-lg my-5 text-primary text-left'>Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod tincidunt nibh est felis varius elit. Rhoncus suspendisse mi turpis neque hac habitant nisl. Lacinia imperdiet ante vel odio nisl lacinia.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className='bg-breakDark'><br/></div>

      <div id='skillsSection' className='bg-primary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-highlight'>Skills</p>

        <div id='frontEnd' className='flex flex-col md:flex-row m-5 md:justify-between '>
          <p className='font-headerTitle text-lg my-4 text-highlight'>Languages:</p>
          <div className='flex gap-5 m-5'>
            <FaJava className='size-20' />
            <SiJavascript className='size-20' />
            <FaHtml5 className='size-20' />
            <FaPython className='size-20' />
            <FaCss3 className='size-20' />

          </div>
        </div>
        <div id='frontEnd' className='flex flex-col md:flex-row m-5 md:justify-between'>
          <p className='font-headerTitle text-lg my-4 text-highlight'>Technologies:</p>
          <div className='flex gap-5 m-5'>
            <FaReact className='size-20' />
            <FaBootstrap className='size-20' />
            <SiGodotengine className='size-20' />
            <IoLogoFirebase className='size-20' />
            <FaNodeJs className='size-20' />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className='bg-breakLight'><br/></div>

      <div id='projectsSection' className='bg-secondary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-highlight'>Projects</p>
        <div id='projectGrid' className='flex mx-auto'>
          <div className='container text-left m-5'>
            <p className='font-headerTitle text-highlight'>GWOrg</p>
            <p className='font-headerTitle text-black'>September - 2024</p>
            <a href="https://dalpalcarl.github.io/GWOrgWeb/"><img src={gworgImg} className='w-50 h-40 rounded-2xl border-solid border-7 border-highlight' alt='GWOrg' /></a>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className='bg-breakGreen'><br/></div>

      <div id='contactMeSection' className='bg-ternary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-primary'>Contact Me</p>
      </div>

      {/* Footer */}

      <div id='footer' className='bg-ternary mx-auto flex flex-col'>
        <form className='text-right m-5 flex flex-col mx-auto'>
          <div className=''>
            <label for='cname' className='p-12 my-4 text-primary text-xl'>Name: </label>
            <input type='text' id='cname' className=''/>
          </div>
          <div className=''>
            <label for='cemail' className='p-12 my-4 text-primary text-xl'>Email: </label>
            <input type='text' id='cemail' name='cemail' />
          </div>
          <div className=''>
            <label for='cnumber' className='p-12 my-4 text-primary text-xl'>Phone Number: </label>
            <input type='text' id='cnumber' name='cnumber' />
          </div>
          <div className=''>
            <label for='cmessage' className='p-12 my-4 text-primary text-xl'>Message: </label>
            <input type='text' id='cmessage' name='cmessage' className=''/>
          </div>
          <button className='w-20 my-4 self-end'>Submit</button>
        </form>
        <p className='bg-ternary text-white'>Copyright &#169; Dallas Carlson 2024</p>
      </div>
    </div>
  );
}

export default App;
