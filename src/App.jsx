 import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-vh-100 bg-light">

      <Navbar />

      <div className="container py-5">

        <div className="bg-white rounded-5 shadow p-4">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default App;