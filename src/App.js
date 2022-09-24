import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Searcher from './components/Searcher/Searcher';
import Category from './components/Category/Category'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Searcher/>
        <Category/>
        <Pages/>
        <Footer/>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
