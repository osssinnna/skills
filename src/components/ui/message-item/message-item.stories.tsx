import type { Meta, StoryObj } from "@storybook/react";
import { MessageItemUI } from "./message-item";
import iconMessage from '../../../assets/message-item/icon-message.svg'


// Метаданные — настройки для Storybook
const meta: Meta<typeof MessageItemUI> = {
title: "Components/ui/MessageItemUI", // название в боковом меню Storybook
component: MessageItemUI,
parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
},
argTypes: {
  userName: { control: 'text'},
  userId: {control: "number"},
  date: {control: 'text'},
  viewed: {control: 'boolean'},
  onView: {action: 'clicked'},
  image: {control: 'text'},
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof MessageItemUI>;

export const newMessageConfirmed: Story = {
  args: {
    userName: 'Николай',
    userId: 12345,
    date: 'сегодня',
    viewed: false,
    onView: ()=>{},
    image: iconMessage,
    message: {
      title: 'принял ваш обмен',
      comment:  'Перейдите в профиль, чтобы обсудить детали'
      
    }
  }
};

export const newMessageOffered: Story ={
  args: {
    userName: 'Татьяна',
    userId: 12345,
    date: '31.12.2025',
    viewed: false,
    onView: ()=>{},
    image: iconMessage,
    message: {
      title: 'предлагает вам обмен',
      comment:  'Примите обмен, чтобы обсудить детали'
      
    }
  }
}

export const newMessageRejected: Story ={
  args: {
    userName: 'Михаил',
    userId: 12345,
    date: '31.12.2025',
    viewed: false,
    onView: ()=>{},
    image: iconMessage,
    message: {
      title: 'отклонил ваш обмен',
      comment:  'Перейдите в профиль, чтобы посмотреть подробности'
      
    }
  }
}

export const viewedMessageConfirmed: Story = {
  args: {
    userName: 'Олег',
    userId: 12345,
    date: 'Сегодня',
    viewed: true,
    onView: ()=>{},
    image: iconMessage,
    message: {
      title: 'принял ваш обмен',
      comment:  'Перейдите в профиль, чтобы обсудить детали'
      
    }
  }
}

export const viewedMessageOffered: Story = {
  args: {
    userName: 'Олег',
    userId: 12345,
    date: 'Вчера',
    viewed: true,
    onView: ()=>{},
    image: iconMessage,
    message: {
      title: 'предлагает вам обмен',
      comment:  'Перейдите в профиль, чтобы обсудить детали'
      
    }
  }
}

export const vievedRejected: Story ={
  args: {
    userName: 'Александр',
    userId: 12345,
    date: 'Вчера',
    viewed: true,
    onView: ()=>{},
    image: iconMessage,
    message: {
      title: 'отклонил ваш обмен',
      comment:  'Перейдите в профиль, чтобы посмотреть подробности'
      
    }
  }
}









