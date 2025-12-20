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
      <>
        <Link to="/modal" state={{ background: location}}>
            <ButtonUI color='primary'>
              Открыть модалку
            </ButtonUI>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam id quis ratione vel perferendis reiciendis possimus expedita consequuntur neque. Dolores obcaecati doloribus numquam itaque, quo optio quas quibusdam pariatur odio quod, dolorum natus incidunt ut aspernatur ratione eos perferendis ipsam earum possimus voluptatum laboriosam. Ex velit id pariatur beatae corporis quam aliquam dicta, impedit est facere placeat obcaecati officiis. Nam fugit mollitia aspernatur natus, provident impedit voluptatum sequi voluptatem deserunt deleniti ab officiis inventore veritatis sapiente aperiam veniam pariatur repellat. Debitis molestias nobis quae aliquid ipsa nemo expedita dolores facilis quaerat unde dolor eligendi earum odio, quos doloribus praesentium dolorem corrupti laborum ipsum sed. Mollitia omnis temporibus sequi reiciendis similique deleniti, dicta, amet illum doloremque quia quo quas dolorem aperiam debitis expedita repudiandae nulla quae veniam saepe nam! Odio reiciendis aliquid dolore optio dicta, assumenda iste, tempora aspernatur expedita, cumque sequi nihil tenetur. Doloribus, a possimus? Enim atque consectetur, deserunt, a sapiente placeat eligendi possimus veniam accusamus ad ipsam fugit obcaecati eaque, minima voluptatem animi quas praesentium temporibus? Sed facilis quibusdam atque pariatur error reiciendis ex maxime ab exercitationem veritatis ullam alias dolorum inventore quidem, animi rem, fugiat quo quis iste natus aliquid architecto. Corrupti harum nobis nesciunt, rem qui nam omnis in, magni perferendis vel ipsam sequi quisquam distinctio sunt ab natus. Repudiandae doloremque eligendi quos. Necessitatibus temporibus distinctio quia iste aliquam praesentium vero nam? Recusandae, praesentium nemo voluptatem deserunt soluta repudiandae itaque dolorum at dicta velit voluptates iure aliquid doloremque porro neque. Quae magnam dolor consequuntur mollitia optio doloribus repellendus, ratione eaque, vel molestias tempora, dolorum praesentium. Laboriosam aperiam dolores culpa suscipit nihil autem tenetur sunt dolorem aliquam! Ullam quasi exercitationem quae repudiandae natus. Sit exercitationem dolor, distinctio ad libero aut, earum, accusantium reprehenderit voluptatum illo veniam tempora consequuntur. Facere explicabo error sunt dicta soluta accusamus officiis autem! Repudiandae ratione ad, accusamus quas vero quos cumque voluptas ducimus, alias quae sequi dolorem rerum! Voluptatibus nulla fugiat quis ipsum cumque nobis atque minus. Adipisci modi odit natus voluptas aut officiis, quasi omnis inventore consectetur magnam nulla? Mollitia repellat quisquam fugit adipisci sed, cumque et autem saepe quidem blanditiis facilis magni nam voluptate dolorem, cupiditate esse explicabo architecto amet ipsa obcaecati voluptatem illo vel eum tempore. Officiis dolor consequatur maxime eaque omnis, optio facere nisi sapiente cumque totam impedit ab quo voluptatum dicta at ducimus nostrum facilis officia voluptatem voluptatibus numquam libero? Quod, quam labore voluptatem laboriosam, animi iusto fugiat iure fuga quis facilis praesentium nemo. Et, expedita exercitationem eius a tempore repellat laudantium modi asperiores impedit fugiat ab libero velit nulla, animi sint dolor quidem nesciunt. Minus, nostrum. Adipisci repellat voluptatibus labore porro quo reprehenderit in esse ipsam dolorem debitis sit odio iure ullam facere, odit quos laudantium optio ut ea? Itaque corporis tenetur maxime accusantium placeat quod delectus cum consequatur repudiandae, temporibus minima dicta nisi esse omnis, voluptates voluptas earum cupiditate unde at explicabo fugiat reiciendis ipsa. Praesentium, dolorum tempore dignissimos qui quis perferendis alias cum assumenda est, deserunt molestias officiis, vero amet aliquid natus dolore molestiae.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam id quis ratione vel perferendis reiciendis possimus expedita consequuntur neque. Dolores obcaecati doloribus numquam itaque, quo optio quas quibusdam pariatur odio quod, dolorum natus incidunt ut aspernatur ratione eos perferendis ipsam earum possimus voluptatum laboriosam. Ex velit id pariatur beatae corporis quam aliquam dicta, impedit est facere placeat obcaecati officiis. Nam fugit mollitia aspernatur natus, provident impedit voluptatum sequi voluptatem deserunt deleniti ab officiis inventore veritatis sapiente aperiam veniam pariatur repellat. Debitis molestias nobis quae aliquid ipsa nemo expedita dolores facilis quaerat unde dolor eligendi earum odio, quos doloribus praesentium dolorem corrupti laborum ipsum sed. Mollitia omnis temporibus sequi reiciendis similique deleniti, dicta, amet illum doloremque quia quo quas dolorem aperiam debitis expedita repudiandae nulla quae veniam saepe nam! Odio reiciendis aliquid dolore optio dicta, assumenda iste, tempora aspernatur expedita, cumque sequi nihil tenetur. Doloribus, a possimus? Enim atque consectetur, deserunt, a sapiente placeat eligendi possimus veniam accusamus ad ipsam fugit obcaecati eaque, minima voluptatem animi quas praesentium temporibus? Sed facilis quibusdam atque pariatur error reiciendis ex maxime ab exercitationem veritatis ullam alias dolorum inventore quidem, animi rem, fugiat quo quis iste natus aliquid architecto. Corrupti harum nobis nesciunt, rem qui nam omnis in, magni perferendis vel ipsam sequi quisquam distinctio sunt ab natus. Repudiandae doloremque eligendi quos. Necessitatibus temporibus distinctio quia iste aliquam praesentium vero nam? Recusandae, praesentium nemo voluptatem deserunt soluta repudiandae itaque dolorum at dicta velit voluptates iure aliquid doloremque porro neque. Quae magnam dolor consequuntur mollitia optio doloribus repellendus, ratione eaque, vel molestias tempora, dolorum praesentium. Laboriosam aperiam dolores culpa suscipit nihil autem tenetur sunt dolorem aliquam! Ullam quasi exercitationem quae repudiandae natus. Sit exercitationem dolor, distinctio ad libero aut, earum, accusantium reprehenderit voluptatum illo veniam tempora consequuntur. Facere explicabo error sunt dicta soluta accusamus officiis autem! Repudiandae ratione ad, accusamus quas vero quos cumque voluptas ducimus, alias quae sequi dolorem rerum! Voluptatibus nulla fugiat quis ipsum cumque nobis atque minus. Adipisci modi odit natus voluptas aut officiis, quasi omnis inventore consectetur magnam nulla? Mollitia repellat quisquam fugit adipisci sed, cumque et autem saepe quidem blanditiis facilis magni nam voluptate dolorem, cupiditate esse explicabo architecto amet ipsa obcaecati voluptatem illo vel eum tempore. Officiis dolor consequatur maxime eaque omnis, optio facere nisi sapiente cumque totam impedit ab quo voluptatum dicta at ducimus nostrum facilis officia voluptatem voluptatibus numquam libero? Quod, quam labore voluptatem laboriosam, animi iusto fugiat iure fuga quis facilis praesentium nemo. Et, expedita exercitationem eius a tempore repellat laudantium modi asperiores impedit fugiat ab libero velit nulla, animi sint dolor quidem nesciunt. Minus, nostrum. Adipisci repellat voluptatibus labore porro quo reprehenderit in esse ipsam dolorem debitis sit odio iure ullam facere, odit quos laudantium optio ut ea? Itaque corporis tenetur maxime accusantium placeat quod delectus cum consequatur repudiandae, temporibus minima dicta nisi esse omnis, voluptates voluptas earum cupiditate unde at explicabo fugiat reiciendis ipsa. Praesentium, dolorum tempore dignissimos qui quis perferendis alias cum assumenda est, deserunt molestias officiis, vero amet aliquid natus dolore molestiae.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam id quis ratione vel perferendis reiciendis possimus expedita consequuntur neque. Dolores obcaecati doloribus numquam itaque, quo optio quas quibusdam pariatur odio quod, dolorum natus incidunt ut aspernatur ratione eos perferendis ipsam earum possimus voluptatum laboriosam. Ex velit id pariatur beatae corporis quam aliquam dicta, impedit est facere placeat obcaecati officiis. Nam fugit mollitia aspernatur natus, provident impedit voluptatum sequi voluptatem deserunt deleniti ab officiis inventore veritatis sapiente aperiam veniam pariatur repellat. Debitis molestias nobis quae aliquid ipsa nemo expedita dolores facilis quaerat unde dolor eligendi earum odio, quos doloribus praesentium dolorem corrupti laborum ipsum sed. Mollitia omnis temporibus sequi reiciendis similique deleniti, dicta, amet illum doloremque quia quo quas dolorem aperiam debitis expedita repudiandae nulla quae veniam saepe nam! Odio reiciendis aliquid dolore optio dicta, assumenda iste, tempora aspernatur expedita, cumque sequi nihil tenetur. Doloribus, a possimus? Enim atque consectetur, deserunt, a sapiente placeat eligendi possimus veniam accusamus ad ipsam fugit obcaecati eaque, minima voluptatem animi quas praesentium temporibus? Sed facilis quibusdam atque pariatur error reiciendis ex maxime ab exercitationem veritatis ullam alias dolorum inventore quidem, animi rem, fugiat quo quis iste natus aliquid architecto. Corrupti harum nobis nesciunt, rem qui nam omnis in, magni perferendis vel ipsam sequi quisquam distinctio sunt ab natus. Repudiandae doloremque eligendi quos. Necessitatibus temporibus distinctio quia iste aliquam praesentium vero nam? Recusandae, praesentium nemo voluptatem deserunt soluta repudiandae itaque dolorum at dicta velit voluptates iure aliquid doloremque porro neque. Quae magnam dolor consequuntur mollitia optio doloribus repellendus, ratione eaque, vel molestias tempora, dolorum praesentium. Laboriosam aperiam dolores culpa suscipit nihil autem tenetur sunt dolorem aliquam! Ullam quasi exercitationem quae repudiandae natus. Sit exercitationem dolor, distinctio ad libero aut, earum, accusantium reprehenderit voluptatum illo veniam tempora consequuntur. Facere explicabo error sunt dicta soluta accusamus officiis autem! Repudiandae ratione ad, accusamus quas vero quos cumque voluptas ducimus, alias quae sequi dolorem rerum! Voluptatibus nulla fugiat quis ipsum cumque nobis atque minus. Adipisci modi odit natus voluptas aut officiis, quasi omnis inventore consectetur magnam nulla? Mollitia repellat quisquam fugit adipisci sed, cumque et autem saepe quidem blanditiis facilis magni nam voluptate dolorem, cupiditate esse explicabo architecto amet ipsa obcaecati voluptatem illo vel eum tempore. Officiis dolor consequatur maxime eaque omnis, optio facere nisi sapiente cumque totam impedit ab quo voluptatum dicta at ducimus nostrum facilis officia voluptatem voluptatibus numquam libero? Quod, quam labore voluptatem laboriosam, animi iusto fugiat iure fuga quis facilis praesentium nemo. Et, expedita exercitationem eius a tempore repellat laudantium modi asperiores impedit fugiat ab libero velit nulla, animi sint dolor quidem nesciunt. Minus, nostrum. Adipisci repellat voluptatibus labore porro quo reprehenderit in esse ipsam dolorem debitis sit odio iure ullam facere, odit quos laudantium optio ut ea? Itaque corporis tenetur maxime accusantium placeat quod delectus cum consequatur repudiandae, temporibus minima dicta nisi esse omnis, voluptates voluptas earum cupiditate unde at explicabo fugiat reiciendis ipsa. Praesentium, dolorum tempore dignissimos qui quis perferendis alias cum assumenda est, deserunt molestias officiis, vero amet aliquid natus dolore molestiae.</p>
      </>
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

