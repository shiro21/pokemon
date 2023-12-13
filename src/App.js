import './App.css';
import Main from "./pages/main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/_reset.scss";
import "./styles/_style.scss";
import Test from './items/test';
import View from './pages/view';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
