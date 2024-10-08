import portrait from './portrait.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fixed sm:mx-auto top-0 left-0 h-screen w-80 m-0 flex flex-col items-center bg-slate-600">
        <img className="h-60 my-5 mx-5 shadow-lg rounded-2xl" src={portrait} alt='Portrait' />
        <p className="font-headerTitle text-4xl text-center hover:text-white transition-all ease-linear">Dallas Carlson</p>
      </div>
    </div>
  );
}

export default App;
