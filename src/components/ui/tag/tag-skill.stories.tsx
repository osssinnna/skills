import type { Meta, StoryObj } from "@storybook/react";
import { TagSkillUI } from './tag-skill';

// Метаданные — настройки для Storybook
const meta: Meta<typeof TagSkillUI> = {
title: "Components/ui/TagSkillUI", // название в боковом меню Storybook
component: TagSkillUI,
parameters: {
layout: "centered", // По умолчанию компоненты центрируются
},
argTypes: {
  color:{
    control: 'radio',
    options: ['#EBE5C5', '#E7F2F6', '#E9F7E7']
  }
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof TagSkillUI>;
//  дефолт
export const DefaultTag: Story = {
  args: {
    color:'#EBE5C5',
    children:'Английский язык'
  }
};


