import { Routes ,Route } from 'react-router-dom';
import './App.css';
import From from './components/form';
import Home from './components/home';
import Cartelera from './components/_general/cartelera';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} exact path="/"/>
      <Route element={<From/>} exact path="/form"/>
      <Route element={<Cartelera/>} exact path="/cartelera"/>
    </Routes>
  );
}

export default App;


