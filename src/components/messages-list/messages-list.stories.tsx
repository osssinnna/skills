import type { Meta, StoryObj } from "@storybook/react";
import { MessagesList } from "./messages-list";
import { MemoryRouter } from "react-router-dom";


// Метаданные — настройки для Storybook
const meta: Meta<typeof MessagesList> = {
title: "Components/ui/MessageListUI", // название в боковом меню Storybook
component: MessagesList,
parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
},
decorators: [
  (Story) => (
    <MemoryRouter>
      <Story/>
    </MemoryRouter>
  )
],
argTypes: {
  title: { control: 'text'},
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof MessagesList>;

// export const viewedMessagesList: Story = {
 
//   args: {
//     title: 'Просмотренные',
//     messages: [
//         { userName:'Николай',
//           userId: 12345,
//           date: '25.12.2025',
//           viewed: true,
//           typeMessage:'confirmed',
//       },
//         { userName:'Татьяна',
//           userId: 123456,
//           date: '25.12.2025',
//           viewed: true,
//           typeMessage: 'offered',
//       },
//       ]
//     }
//   }

//   export const newMessagesList: Story = {
 
//   args: {
//     title: 'Новые уведомления',
//     messages: [
//         { userName:'Николай',
//           userId: 12345,
//           date: '25.12.2025',
//           viewed: false,
//           typeMessage:'confirmed',
//       },
//         { userName:'Татьяна',
//           userId: 123456,
//           date: '25.12.2025',
//           viewed: false,
//           typeMessage: 'offered',
//       },
//       ]
//     }
//   }












