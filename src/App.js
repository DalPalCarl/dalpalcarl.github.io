import portrait from './portrait.jpg';
import './App.css';

function App() {
  return (
    <div className="App left-0">
      {/* Portfolio Header */}
      <div id="folioHeader" className="bg-primary container mx-auto flex flex-col">
        <img className="size-1/5 self-center my-5 shadow-lg rounded-full border-4 border-collapse border-highlight hover:border-white transition-all ease-linear" src={portrait} alt='Portrait' />
        <p className="my-3 font-headerTitle text-6xl text-center text-highlight transition-all ease-linear">Dallas Carlson</p>
        <p className='mb-5 font-headerTitle text-black text-2xl'> - Software Engineer - </p>
        <div id="headerLinks" className="flex flex-row space-x-10 mx-auto my-5">
          <p className='font-headerTitle text-md'>LinkedIn</p>
          <p className='font-headerTitle text-md'>GitHub</p>
          <p className='font-headerTitle text-md'>Itch.io</p>
        </div>
      </div>

      {/* About Me */}
      <div id="aboutMeSection" className="bg-secondary container mx-auto flex flex-col">
        <p className='font-headerTitle text-2xl my-4 text-highlight '>About Me</p>
        <div className='container w-3/5 mx-auto'>
          <p id='aboutMeText' className='font-headerTitle text-md text-highlight'>Dallas Carlson</p>
        </div>
      </div>
      {/* Areas of Interest */}
      <div id='areasSection' className='bg-ternary container mx-auto flex flex-col'>
        <p className='font-headerTitle text-2xl my-4 text-primary'>Areas of Interest</p>
      </div>
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
      {/* Footer */}
    </div>
  );
}

export default App;
