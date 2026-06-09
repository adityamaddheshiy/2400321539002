import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllNotifications from "./Pages/Allnotification";
import PriorityNotifications from "./Pages/PriorityNotification";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<AllNotifications />} />
          <Route path="/priority" element={<PriorityNotifications />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;