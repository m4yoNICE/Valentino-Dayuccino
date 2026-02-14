import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TeleportProvider } from "./contexts/TeleportContext";
import { MainLayout } from "./layout/MainLayout";
import { WillValentine } from "./pages/WillValentine";
import { Message } from "./pages/Home/Message";
import { Notes } from "./pages/Home/Notes";

export default function App() {
  return (
    <TeleportProvider>
      <BrowserRouter>
        <Routes>
          {/* Login/Landing - no header */}
          <Route path="/" element={<WillValentine />} />

          {/* Routes with header */}
          <Route element={<MainLayout />}>
            <Route path="/message" element={<Message />} />
            <Route path="/notes" element={<Notes />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </TeleportProvider>
  );
}
