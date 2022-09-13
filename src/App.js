import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Searcher from './components/Searcher/Searcher';
import Category from './components/Category/Category'; 


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Searcher/>
        <Category/>
        <Pages/>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
