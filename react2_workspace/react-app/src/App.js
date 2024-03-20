import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./CRUD/Add";
import Books from "./CRUD/Books";
import Update from "./CRUD/Update";
import './style.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;