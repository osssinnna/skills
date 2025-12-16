import type { Meta, StoryObj } from "@storybook/react";
import { AccordionUI } from "./accordion";
import { languages } from "./mocks/checkboxs";
// // Метаданные — настройки для Storybook
const meta: Meta<typeof AccordionUI> = {
  title: "Components/ui/AccordionUI", // название в боковом меню Storybook
  component: AccordionUI,
  parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
  },
  argTypes: {
    onChange: { action: "clicked" }, // Пример событий
    onItemChange: {action: 'clicked'},
    isActive: {control: 'boolean'},
    items: { control: "object" },
    label: { control: 'text' },

  },
};
export default meta;

// // Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof AccordionUI>;
//  дефолт
export const square: Story = {
  render: (args) => {
    return (<div style={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <AccordionUI {...args}/>
    </div>)
  },
  args: {
    label: 'Иностранные языки',
    isActive: false,
    items: languages
  }
};


