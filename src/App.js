import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from "./login";
import Home from "./home";
import Header from "./Header";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/login" element={ <Login/>}/>
            <Route path="/" element={ <Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;