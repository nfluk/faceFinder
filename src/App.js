import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
