import { Routes, Route } from "react-router-dom";
import PageLayout from "../../pages/pageLayout/pageLayout";
import MainPage from "../../pages/mainPage/mainPage";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";
import { Register } from "../../pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes></Routes>
    </>
  );
}

export default App;
