import "./App.css";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/User/:userId" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
