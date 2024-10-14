import portrait from './portrait.jpg';
import appDev from './app-development.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Portfolio Header */}
      <div id="folioHeader" className="bg-primary mx-auto flex flex-col">
        <img className="size-60 self-center my-5 shadow-lg rounded-full border-7 border-solid border-highlight hover:border-white transition-all ease-linear" src={portrait} alt='Portrait' />
        <p className="my-3 font-headerTitle text-6xl text-center text-highlight transition-all ease-linear">Dallas Carlson</p>
        <p className='mb-5 font-headerTitle text-black text-2xl'> - Software Engineer - </p>
        <div id="headerLinks" className="flex flex-row space-x-10 mx-auto my-5">
          <p className='font-headerTitle text-md'>LinkedIn</p>
          <p className='font-headerTitle text-md'>GitHub</p>
          <p className='font-headerTitle text-md'>Itch.io</p>
        </div>
      </div>

      {/* About Me */}
      <div className='bg-breakLight'><br/></div>

      <div id="aboutMeSection" className="bg-secondary mx-auto flex flex-col">
        <p className='font-headerTitle text-2xl my-4 text-highlight '>About Me</p>
        <div className='container flex flex-row gap-4 mx-auto mb-5'>
          <img className="size-60" src={appDev} alt='App Development' />
          <div className='rounded-2xl bg-breakDark px-1 place-self-center m-5'>
            <p id='aboutMeText' className='font-headerTitle text-lg text-left text-highlight'>Hi, I'm Dallas. I'm a Computer Science graduate and aspiring Software Engineer. I'm deeply passionate
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
      </div>

      {/* Skills */}
      <div className='bg-breakDark'><br/></div>

      <div id='skillsSection' className='bg-primary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-highlight'>Skills</p>
      </div>

      {/* Projects */}
      <div className='bg-breakLight'><br/></div>

      <div id='projectsSection' className='bg-secondary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-highlight'>Projects</p>
      </div>

      {/* Contact Me */}
      <div className='bg-breakGreen'><br/></div>

      <div id='contactMeSection' className='bg-ternary mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-primary'>Contact Me</p>
      </div>

      {/* Footer */}

      <div id='footer' className='bg-ternary mx-auto flex flex-col'>
        <form>

        </form>
      </div>
    </div>
  );
}

export default App;
