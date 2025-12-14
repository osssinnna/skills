import type { Meta, StoryObj } from "@storybook/react";
import { ButtonUI } from "./button";

// Метаданные — настройки для Storybook
const meta: Meta<typeof ButtonUI> = {
title: "Components/ui/ButtonUI", // название в боковом меню Storybook
component: ButtonUI,
parameters: {
layout: "centered", // По умолчанию компоненты центрируются
},
argTypes: {
onClick: { action: "clicked" }, // Пример событий
color: {
  control: 'radio', // формат переключения
  options: ['primary', 'secondary']
},
fulsSize: {control: 'boolean'},
disabledToggle: {control: 'boolean'}
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof ButtonUI>;
//  дефолт
export const Primary: Story = {
  args: {
    color: 'primary',
    fulsSize: true,
    disabledToggle: false,
    children: 'Предложить обмен'
  }
};

//  секондари
export const Secondary: Story = {
  args: {
    color: 'secondary',
    fulsSize: false,
    disabledToggle: false,
    children: 'Обмен предложен'
  }
}

// disabled

export const Disabled: Story = {
  args: {
    color: 'secondary',
    fulsSize: false,
    disabledToggle: true,
    children: 'Сохранить Disabled'
  }
}

// fullWidth

export const fullWidth: Story = {
  render: (args) => (
    <div style = {{width: '400px', padding: '20px', border: '2px solid black'}}>
      <ButtonUI {...args}/>
    </div>
  ),
  args: {
    color: 'primary',
    fulsSize: true,
    disabledToggle: false,
    children: 'Предложить обмен'
  }
}

