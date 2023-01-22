import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar.js';
import Effect from './components/vanta/effect.js';
import Cards from './components/cards/card';
import myImage from './img/profilepic.jpg';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="effect-container">
        <Effect/>        
      </div>
      <div className='cards-container container-sm row'>
        <div className='col-3'>
          <Cards typo={"design"} frontContent={"Designer"} backContent={"Culo"} />
        </div>
          <img className='ppic col-3' src={myImage} alt="profilepic"/>
        <div className='col-3'>
          <Cards typo={"coder"} frontContent={"<coder>"} backContent={"Culo1"} />
        </div>
        <div className='text-center'> 
          <h2 className='font'>Sobre Mí</h2>
        </div>
        <div className='abtme'>
          <p className='font'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
            aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </div>
      <div className='footer font'>
      <Footer/> 
      </div>
    </div>
  );
}

export default App;