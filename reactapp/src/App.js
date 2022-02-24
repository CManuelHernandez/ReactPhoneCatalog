import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PhonesPage } from "./components/phones/PhonesPage";
import "./App.css";
import { PhonesDetailPage } from "./components/phones/PhonesDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<PhonesDetailPage />} />
        <Route path="/" element={<PhonesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
