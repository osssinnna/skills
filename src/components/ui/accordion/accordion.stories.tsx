// import type { Meta, StoryObj } from "@storybook/react";
// import { AccordionUI } from "./accordion";

// // Метаданные — настройки для Storybook
// const meta: Meta<typeof AccordionUI> = {
// title: "Components/ui/AccordionUI", // название в боковом меню Storybook
// component: AccordionUI,
// parameters: {
// layout: "centered", // По умолчанию компоненты центрируются
// },
// argTypes: {
// onChange: { action: "clicked" }, // Пример событий
// variant: {
//   control: 'radio', // формат переключения
//   options: ['square', 'round', 'accordion']
// },
// isActive: {control: 'boolean'},

// label: { control: 'text' },
// groupName: { control: 'text'}
// },
// };
// export default meta;

// // Создаём тип для истории - гарантия соотв пропсам комп-та
// type Story =StoryObj<typeof AccordionUI>;
// //  дефолт
// export const story: Story = {
//   args: {
//     label: 'Английский язык',
//     variant: 'square',
//     isActive: false,
//     groupName: 'Иностранные языки'
//   }
// };

// // //  секондари
// // export const Secondary: Story = {
// //   args: {
// //     color: 'secondary',
// //     fulsSize: false,
// //     disabledToggle: false,
// //     children: 'Обмен предложен'
// //   }
// // }

// // // disabled

// // export const Disabled: Story = {
// //   args: {
// //     color: 'secondary',
// //     fulsSize: false,
// //     disabledToggle: true,
// //     children: 'Сохранить Disabled'
// //   }
// // }

// // // fullWidth

// // export const fullWidth: Story = {
// //   render: (args) => (
// //     <div style = {{width: '400px', padding: '20px', border: '2px solid black'}}>
// //       <CheckBoxUI {...args}/>
// //     </div>
// //   ),
// //   args: {
// //     color: 'primary',
// //     fulsSize: true,
// //     disabledToggle: false,
// //     children: 'Предложить обмен'
// //   }
// // }

