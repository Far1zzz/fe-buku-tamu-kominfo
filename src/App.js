import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/Background.css";
import Admin from "./pages/Admin/Admin";
import Asal from "./pages/Asal/Asal";
import FormTamuPemkab from "./pages/FormTamuAreaPemkab/FormTamuPemkab";
import FormTamuInstansiLuar from "./pages/FormTamuInstansiLuar/FormTamuInstansiLuar";
import HalVideo from "./pages/Hal video/HalVideo";
import ProfilDinas from "./pages/Profil Dinas/ProfilDinas";
import VisiMisi from "./pages/Visi-Misi/VisiMisi";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/video" element={<HalVideo />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/profil-dinas" element={<ProfilDinas />} />
        <Route path="/asal" element={<Asal />} />
        <Route path="/area-pemkab" element={<FormTamuPemkab />} />
        <Route path="/instansi-luar-umum" element={<FormTamuInstansiLuar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
