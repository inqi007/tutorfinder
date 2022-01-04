import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index'
const App = () => {
  /*const [data, setData] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>

  );*/
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} exact></Route>
        </Routes>
      </Router>
    </div>
  )

}

export default App;
