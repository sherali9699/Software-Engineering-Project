import './App.css';
import '../src/assets/css/style.css'


//importing Main components
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import Review from './components/review';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Menu/>
      <Review/>
      <Contact/>
    </div>
  );
}

export default App;
