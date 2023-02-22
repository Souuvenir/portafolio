import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar.js';
import Effect from './components/vanta/effect.js';
import myImage from './img/profilepic.jpg';
import Footer from './components/footer/footer';
import Chatbot from './components/chatbot/chatbot'


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="effect-container" id='inicio'>
        <Effect/>
        <Chatbot></Chatbot>
      </div>
      <div className='footer fontn'>
       
      </div>
    </div>
  );
}

export default App;