import { Route, Routes } from "react-router";
import "./App.scss";
import { Layout } from "./layout";
import {
  Register,
  CreateIdea,
  Home,
  Ideas,
  Login,
  OneIdea,
  Profile,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/ideas/:id" element={<OneIdea />} />
          <Route path="/createidea" element={<CreateIdea />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
