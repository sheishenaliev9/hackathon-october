import { Route, Routes } from "react-router";
import "./App.scss";
import { Layout } from "./layout";
import { Home, Ideas } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
