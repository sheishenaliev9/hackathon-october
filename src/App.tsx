import { Route, Routes } from "react-router";
import "./App.scss";
import { Layout } from "./layout";
import { Auth, Home, Ideas, Login, Profile } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
