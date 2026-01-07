import { Outlet } from "react-router-dom";
import { AppHeader } from "../../components/app-header";
import { FooterUI } from "../../components/ui/footer";

function PageLayout() {
  return (
    <>
      <AppHeader />

      <main>
        <Outlet />
      </main>

      <FooterUI />
    </>
  );
}

export default PageLayout;
