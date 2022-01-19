import { Routes ,Route } from 'react-router-dom';
import './App.css';
import From from './components/form';
import Home from './components/home';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} exact path="/"/>
      <Route element={<From/>} exact path="/form"/>
    </Routes>
  );
}

export default App;


