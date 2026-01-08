import { Routes, Route } from "react-router-dom";
import PageLayout from "../../pages/pageLayout/pageLayout";
import MainPage from "../../pages/mainPage/mainPage";
import { ServerError500 } from "../../pages/serverError500/serverError500";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/autorizate"></Route>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<MainPage />}></Route>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="500" element={<ServerError500 />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>

      <Routes></Routes>
    </>
  );
}

export default App;
