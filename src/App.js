import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Myapi from "./api";
import Mybook from "./book";
import Mydashboard from "./dashboard";
import Myuser from "./user";


function App() {
  return (
    <HashRouter>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4 text-center">
            <h1 className="text-danger"> React and Redux </h1>
          </div>
          <div className="col-lg-8 text-end">
             <div className="btn-group">
              <Link to="/" className="btn btn-primary">Dashboard</Link> 
              <Link to="/book" className="btn btn-info">Manage Books</Link> 
              <Link to="/user" className="btn btn-warning">Manage Users</Link> 
              <Link to="/api" className="btn btn-success">Manage API Data</Link> 
             </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Mydashboard />} />
        <Route exact path="/book" element={<Mybook />} />
        <Route exact path="/user" element={<Myuser />} />
        <Route exact path="/api" element={<Myapi />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
