import "./App.css";
import Home from "./Home";
import User from "./User";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User/:userId" element={<User  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
