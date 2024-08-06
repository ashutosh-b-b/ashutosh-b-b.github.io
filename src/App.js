import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home'
// import Blog from './pages/blogs'
function App() {
  return (
<Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/blogs" element={<Blog />} /> */}
            </Routes>
        </Router>
  );
}

export default App;
