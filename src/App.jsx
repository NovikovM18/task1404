import './App.css';
import TableRegion from './TableRegion';
import { Routes, Route } from "react-router-dom";
import TableComment from './TableComment';

function App() {
  return (
    <div className="App">
      {/* <TableRegion /> */}
      <Routes>
        <Route path="https://novikovm18.github.io/task1404/" element={<TableComment />} />
        <Route path="/comment" element={<TableComment />} />
        <Route path="*" element={<TableRegion />} />
      </Routes>
    </div>
  );
}

export default App;
