import './App.css';
import TableRegion from './TableRegion';
import { Routes, Route } from "react-router-dom";
import TableComment from './TableComment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TableRegion />} />
        <Route path="comment" element={<TableComment />} />

      </Routes>
    </div>
  );
}

export default App;
