import { BrowserRouter } from 'react-router-dom';
//import Nav from './Components/Nav';
import Home from '../src/Components/NavComponents/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
}

export default App;
