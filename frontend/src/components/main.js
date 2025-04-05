import Home from './home';
import About from './about';
import Menu from './menu';
import Review from './review';
import Contact from './contact';


function Mainpage() {
    return (
      <div>
        <Home/>
        <About/>
        <Menu/>
        <Review/>
        <Contact/>
      </div>
    );
  }
  
  export default Mainpage;