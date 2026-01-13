import type { Meta, StoryObj } from '@storybook/react';
import type { Category } from './tab-all-skills';
import { TabAllSkills } from './tab-all-skills';

const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Бизнес и карьера',
    subcategories: [
      { id: 11, name: 'Управление командой' },
      { id: 12, name: 'Маркетинг и реклама' },
      { id: 13, name: 'Продажи и переговоры' },
      { id: 14, name: 'Личный бренд' },
    ],
  },
  {
    id: 2,
    name: 'Творчество и искусство',
    subcategories: [
      { id: 21, name: 'Рисование и иллюстрация' },
      { id: 22, name: 'Фотография' },
      { id: 23, name: 'Видеомонтаж' },
      { id: 24, name: 'Музыка и звук' },
    ],
  },
  {
    id: 3,
    name: 'Иностранные языки',
    subcategories: [
      { id: 31, name: 'Английский' },
      { id: 32, name: 'Французский' },
      { id: 33, name: 'Испанский' },
    ],
  },
  {
    id: 4,
    name: 'Образование и развитие',
    subcategories: [
      { id: 41, name: 'Курсы онлайн' },
      { id: 42, name: 'Саморазвитие' },
    ],
  },
  {
    id: 5,
    name: 'Дом и уют',
    subcategories: [
      { id: 51, name: 'Интерьер' },
      { id: 52, name: 'Садоводство' },
    ],
  },
  {
    id: 6,
    name: 'Здоровье и лайфстайл',
    subcategories: [
      { id: 61, name: 'Фитнес' },
      { id: 62, name: 'Питание' },
      { id: 63, name: 'Медитация' },
    ],
  },
];

const meta: Meta<typeof TabAllSkills> = {
  title: 'UI/TabAllSkills',
  component: TabAllSkills,
  args: {
    categories: mockCategories,
    onClose: () => {
      console.log('onClose called');
    },
    isOpen: true, 
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TabAllSkills>;

export default meta;

type Story = StoryObj<typeof TabAllSkills>;

export const Default: Story = {
  args: {
    isOpen: true,
  }
};

export const Empty: Story = {
  args: {
    categories: [],
    isOpen: true,
  },
};

export const WithSingleCategory: Story = {
  args: {
    categories: [mockCategories[0]],
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент скрыт - ничего не отображается',
      },
    },
  },
};

export const WithoutCloseHandler: Story = {
  args: {
    isOpen: true,
    onClose: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент без обработчика закрытия (просто блок)',
      },
    },
  },
};

