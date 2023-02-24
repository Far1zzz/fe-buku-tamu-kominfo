import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import FormTamuPemkab from "./pages/FormTamuAreaPemkab/FormTamuPemkab";
import FormTamuInstansiLuar from "./pages/FormTamuInstansiLuar/FormTamuInstansiLuar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/area-pemkab" element={<FormTamuPemkab />} />
        <Route path="/instansi-luar/umum" element={<FormTamuInstansiLuar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
