import { Route, Routes } from "react-router";
import "./App.scss";
import { Layout } from "./layout";
import { Auth, Home, Ideas } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/authorization" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
