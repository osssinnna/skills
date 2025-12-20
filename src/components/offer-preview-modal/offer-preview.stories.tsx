import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { OfferPreview } from "./offer-preview";

const meta: Meta<typeof OfferPreview> = {
  title: "Components/OfferPreview",
  component: OfferPreview,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OfferPreview>;

export const Default: Story = {
  args: {
    skillName: "Игра на барабанах",
    skillCategory: "Творчество и искусство",
    skillSubCategory: "Музыка и звук",
    skillDescription:
      "Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без партитуры.",
    skillImg: [
      "src/assets/images/main.png",
      "src/assets/images/second.png",
      "src/assets/images/third.png",
      "src/assets/images/fourth.png",
    ],
  },
};

export const WithoutImages: Story = {
  args: {
    skillName: "Игра на барабанах",
    skillCategory: "Творчество и искусство",
    skillSubCategory: "Музыка и звук",
    skillDescription: "Пример предпросмотра без изображений.",
    skillImg: [],
  },
};
