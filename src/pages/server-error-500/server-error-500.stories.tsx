import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ServerError500 } from './server-error-500';

const meta: Meta<typeof ServerError500> = {
  title: 'Pages/ServerError500',
  component: ServerError500,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Страница 500 ошибки (Internal Server Error). Отображается при возникновении ошибок на сервере.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServerError500>;

export default meta;
type Story = StoryObj<typeof meta>;

// дефолтная страница
export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll('button');
    console.log('Кнопки на странице:', buttons.length);
  },
};