import './App.css';
import Beta from './components/Beta';
import Brands from './components/Brands';
import Content from './components/Content.js';
import Footer from './components/Footer';

import Navbar from './components/Navbar.js';
import Roles from './components/Roles';
function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Content/>
        <Brands/>
        <Roles/>
        <Beta/>
        <Footer/>

    </div>
  );
}

export default App;
