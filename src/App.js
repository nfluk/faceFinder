import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
      <ParticlesBg type="cobweb" bg={true} color="#9400d3" />
    </div>
  );
}

export default App;
