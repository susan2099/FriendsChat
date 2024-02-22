import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
import './style.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    /*<BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>*/
    <HomeScreen/>
  );
}

export default App;
