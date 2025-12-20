import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal";
import { ModalMessageUI } from "../ui/modal/modal-message";
import bellIcon from '../../assets/modal-message/notificationBell-icon.svg';
import { ButtonUI } from "../ui/button";
import { useGoBack } from "../../utils/hooks";
import { Link, MemoryRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    onClose: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;
//  создаем тестовый роутер MemoryRouter с путем /
//  тесрируем  Модалку с тестовым контентом ModalMessageUI и хуком goBack 
const ModalStory = () => {

  const goBack = useGoBack(1);
  const navigate = useNavigate();
  const handleClose = () => {
      navigate('/404');
  }
  return (
    <>
      <Modal onClose={()=> goBack()}>
          <ModalMessageUI
            image={bellIcon}
            title="Вы предложили обмен"
            text="Проверка слушателей закрытия модалки по Esc и оверлей"
            buttonsProps={[{ textBtn: 'Готово', statusBtn: 'primary', onClick: handleClose}]}
          />
        </Modal>
      
    </>
  )
};

const PageHome = () => {
  const location = useLocation();
    return (
      <Link to="/modal" state={{ background: location}}>
          <ButtonUI color='primary'>
            Открыть модалку
          </ButtonUI>
      </Link>
    )
}

const AppRoutes = () => {
    const location = useLocation();
    const backgroundLocation = location.state?.background;
    const goBack = useGoBack(1);
    return <>
              <Routes location={backgroundLocation || location}>
                {/* Главная страница с кнопкой */}
                <Route
                  path="/"
                  element={
                    <PageHome/>
                  }
                />
                <Route
                  path="/404"
                  element={
                    <NotFound404 />
                  }
                />
              </Routes>
             { backgroundLocation &&  
                  <Routes>
                    {/* Страница модалки */}
                  <Route
                    path="/modal"
                    element={<ModalStory />}
                  />
                </Routes>}
          </> 
}


export const DefaultModalOpenAndClose: Story = {

  render: () => {
       return (
        <MemoryRouter initialEntries={['/']}>
            <AppRoutes/>
        </MemoryRouter>
       )
    
  
  },
};

