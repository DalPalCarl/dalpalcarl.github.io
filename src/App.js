import portrait from './pics/portrait.jpg';
import gworgImg from './pics/GWOrgTitle.png';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaGithub, FaItchIo, FaJava, FaHtml5, FaPython, FaCss3, FaReact, FaBootstrap, FaNodeJs, FaGitAlt} from "react-icons/fa";
import { SiJavascript, SiGodotengine, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import './App.css';

function App() {
  const [state, handleSubmit] = useForm("mjkvvprn");
  if(state.succeeded){
    return (
      <div className='App'>
        <p className='font-headerTitle text-2xl text-highlight'>Thank you for contacting me!</p>
        <p className='font-headerTitle text-lg text-highlight underline hover:text-blue-700 transition-all ease-linear'><a href='https://dalpalcarl.github.io'>Return to website</a></p>
      </div>
    );
  }

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

      <div id='areasSection' className='bg-ternary mx-auto flex flex-col justify-evenly'>
        <p className='font-headerTitle text-2xl my-12 text-primary'>Areas of Interest</p>
        <div id='areas' className='flex justify-evenly my-12 flex-col md:flex-row'>
          <div className='mx-auto md:mx-3 md:w-1/5 w-80'>
            <p className='font-headerTitle text-xl my-4 text-primary'>Frontend Development</p>
            <p className='font-headerTitle text-lg my-5 text-primary text-left'>One of my favorite things about developing applications is seeing others use them, and a good user experience
              is dependent on frontend development and design. I am continuously intrigued by the way information is presented,
              and strive to create appealing visuals myself in my projects.</p>
          </div>
          <div className='mx-auto md:mx-3 w-80 md:w-1/5'>
            <p className='font-headerTitle text-xl my-4 text-primary'>Game Development</p>
            <p className='font-headerTitle text-lg my-5 text-primary text-left'>Though I try to showcase my technical abilities, there is also a more creative side to programming that I find
              in game development. I find it to be an artful approach to learning principles of OOP and an invaluable teacher
              for writing cohesive code.</p>
          </div>
          <div className='mx-auto md:mx-3 w-80 md:w-1/5'>
            <p className='font-headerTitle text-xl my-4 text-primary'>Lifelong Learning</p>
            <p className='font-headerTitle text-lg my-5 text-primary text-left'>Immersing myself in the world of Computer Science is a deep passion of mine; it is something I can always learn
              more about, especially with how quickly it evolves. Creating something from imagination with a purpose is
              what fulfils me as a developer.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className='bg-breakDark'><br/></div>

      <div id='skillsSection' className='bg-primary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-highlight'>Skills</p>

        <div id='frontEnd' className='flex flex-col md:flex-row m-5 md:justify-evenly '>
          <p className='font-headerTitle text-lg my-4 text-highlight'>Languages:</p>
          <div className='flex gap-5 m-5'>
            <FaJava className='size-20 hover:overline decoration-highlight decoration-4' />
            <SiJavascript className='size-20' />
            <FaHtml5 className='size-20' />
            <FaPython className='size-20' />
            <FaCss3 className='size-20' />

          </div>
        </div>
        <div id='frontEnd' className='flex flex-col md:flex-row m-5 md:justify-evenly'>
          <p className='font-headerTitle text-lg my-4 text-highlight'>Technologies:</p>
          <div className='flex flex-wrap justify-center gap-5 m-5'>
            <FaReact className='size-20 group' />
            <FaBootstrap className='size-20' />
            <SiGodotengine className='size-20' />
            <IoLogoFirebase className='size-20' />
            <FaNodeJs className='size-20' />
            <SiTailwindcss className='size-20' />
            <FaGitAlt className='size-20' />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className='bg-breakLight'><br/></div>

      <div id='projectsSection' className='bg-secondary mx-auto flex flex-col mb-5'>
        <p className='font-headerTitle text-2xl my-4 text-highlight'>Projects</p>
        <div id='projectGrid' className='flex mx-auto mb-10'>
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

      <div id='footer' className='bg-ternary flex flex-col justify-center gap-4'>
        <form className='text-center md:text-right m-5 flex flex-col md:mx-auto md:justify-center gap-3' onSubmit={handleSubmit}>
          <div className=''>
            <label for='name' className='p-12 my-4 text-primary text-xl'>Name: </label>
            <input type='text' id='name' className='rounded-md border-0 ring-1 ring-ternary h-6 p-1 font-headerTitle w-60'/>
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
          <div className=''>
            <label for='email' className='p-12 my-4 text-primary text-xl'>Email: </label>
            <input type='email' id='email' name='email' className='rounded-md border-0 ring-1 ring-ternary h-6 p-1 font-headerTitle w-60'/>
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </div>
          <div className=''>
            <label for='number' className='p-12 my-4 text-primary text-xl'>Phone Number: </label>
            <input type='tel' id='number' name='number' className='rounded-md border-0 ring-1 ring-ternary h-6 p-1 font-headerTitle w-60'/>
            <ValidationError prefix='Number' field='number' errors={state.errors} />
          </div>
          <br/>
          <div className='text-center md:text-left flex-col flex md:ms-12 my-2'>
            <label for='message' className='py-3 text-primary text-xl'>Message: </label>
            <textarea type='text' id='cmessage' name='message' className='rounded-md border-0 ring-1 ring-ternary h-20 font-headerTitle p-3'/>
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>
          <button className='w-20 my-4 self-end text-white font-headerTitle border-0 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' type='submit' disabled={state.submitting} >Submit</button>
        </form>

        {/* Footer */}

        <p className='bg-ternary text-white'>Copyright &#169; Dallas Carlson 2024</p>
      </div>
    </div>
  );
}

export default App;
