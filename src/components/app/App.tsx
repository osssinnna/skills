import { Routes, Route } from "react-router-dom";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";
import { AppHeader } from "../app-header";
import { FooterUI } from "../ui/footer";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        {/* любые существующие роуты */}

        {/* временно для проверки */}
        <Route path="/404" element={<NotFound404 />} />

        {/* настоящий 404 */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <FooterUI />
    </>
  );
}

export default App;
