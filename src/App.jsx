import { Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CharacterDetail />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
