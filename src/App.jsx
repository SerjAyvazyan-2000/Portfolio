import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import About from './components/about';
import Experiance from './components/experiance';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import "./assets/style/index.scss"

function App() {
  return <div className='wrapper'>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
    
}

export default App;
