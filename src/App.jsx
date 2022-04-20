import './App.css';
import TableRegion from './TableRegion';
import { Routes, Route } from "react-router-dom";
import TableComment from './TableComment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/task1404" element={<TableRegion />} />
        <Route path="/task1404/comment" element={<TableComment />} />
      </Routes>
    </div>
  );
}

export default App;
