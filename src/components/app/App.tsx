import { Routes, Route } from "react-router-dom";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";
import { Register } from "../../pages/register";
import { PageLayout } from "../../pages/page-layout";
import { MainPage } from "../../pages/main-page";
import { About } from "../about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<MainPage />} />
        </Route>
        {/* любые существующие роуты */}
        <Route path="/register" element={<Register />} />

        {/* временно для проверки */}
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound404 />} />

        {/* настоящий 404 */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
