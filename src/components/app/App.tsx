import { Routes, Route } from "react-router-dom";
import PageLayout from "../../pages/pageLayout/pageLayout";
import MainPage from "../../pages/mainPage/mainPage";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";
import { Register } from "../../pages/register";
import UserExpandedPage from "../../pages/userExpanded/userExpandedPage";
import FavoritePage from "../../pages/favorite/favorite";
import { ProtectedRoute } from "../protected-route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="skill/:id" element={<UserExpandedPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>

      <Route
        path="/register"
        element={
          <ProtectedRoute onlyUnAuth defaultRedirectPath="/">
            <Register />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
