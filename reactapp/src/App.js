import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PhonesPage } from "./phones/PhonesPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhonesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
