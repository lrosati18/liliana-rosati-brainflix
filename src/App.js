import "./App.scss";
import Header from "./components/Header/Header";
import PlayerPage from "./pages/PlayerPage/Player";
import UploadPage from "./pages/UploadPage/Upload";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PlayerPage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/videos/:videoId" element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
