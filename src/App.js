import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Cards/>
    </div>
  );
}

export default App;
