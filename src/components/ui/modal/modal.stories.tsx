import type { Meta, StoryObj } from "@storybook/react";
import { ModalUI } from "./modal";
import { ModalMessageUI } from "./modal-message";
import offerDoneIcon from '../../../assets/modal-message/offerDoneIcon.svg';
import account from '../../../assets/modal-message/account.svg';

// Метаданные — настройки для Storybook
const meta: Meta<typeof ModalUI> = {
title: "Components/ui/ModalUI", // название в боковом меню Storybook
component: ModalUI,
parameters: {
// layout: "centered", // По умолчанию компоненты центрируются
},
argTypes: {
onClose: { action: "clicked" }, // пока  без клика

},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof ModalUI>;

export const offerChange: Story = {
  args: {
   onClose: ()=>{},
   children: (
    <ModalMessageUI
      image={offerDoneIcon}
      title='Вы предложили обмен'
      text= 'Теперь дождитесь подтверждения. Вам придёт уведомление'
      buttonsProps={
        [{
          textBtn: 'Готово',
          statusBtn: 'primary'
        }]
      }
    />
   )
  }
};

export const toLogin: Story = {
  args: {
   onClose: ()=>{},
   children: (
    <ModalMessageUI
      image={account}
      title='Пожалуйста, войдите в аккаунт'
      text= 'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
      buttonsProps={
        [
          {
            textBtn: 'Отмена',
            statusBtn: 'secondary'
          },
          {
            textBtn: 'Войти',
            statusBtn: 'primary'
          },

        ]
      }
    />
   )
  }
};





