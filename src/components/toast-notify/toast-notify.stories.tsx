import type { Meta, StoryObj } from "@storybook/react";
import { ToastNotify } from './index';
import { MemoryRouter } from "react-router-dom";
import { ButtonUI } from "../ui/button";
import { useState, type FC } from "react";

// Метаданные — настройки для Storybook
const meta: Meta<typeof ToastNotify > = {
title: "Components/ToastNotify ", // название в боковом меню Storybook
component: ToastNotify ,
parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
},
decorators: [
  (Story) => (
    <MemoryRouter>
      <Story/>
    </MemoryRouter>
  ),
],
argTypes: {
  name:{
    control: 'text',
  },
  pathName: {
    control: 'text'
  },
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof ToastNotify>;

const DefaultCase:FC = () => {
     const [isShow, setShow] = useState<boolean>(false);
  
    return (
              <div>
                <ButtonUI onClick={()=>{setShow(!isShow)}} color='primary'>показать</ButtonUI>
               { isShow && (<ToastNotify
                  name = 'Алексей'
                  id = {12345}
                  pathName='exchanges'
                />)}
              </div>
            )
     
}



//  дефолт
export const DefaultToast: Story = {
  render: () => {
    return <DefaultCase/>
      }
};


