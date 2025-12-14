import type { Meta, StoryObj } from '@storybook/react';
import { PersonCard } from './PersonCard';
import { mockPerson1, mockPerson2 } from "./mocks/personMocks";

const meta: Meta<typeof PersonCard> = {
    title: 'Components/PersonCard',
    component: PersonCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Компонент карточки человека. Содержит информацию о пользователе, его навыки и позволяет ставить лайки",
            },
        },
    },
    argTypes: {
        isLiked: {
            control: 'boolean',
            description: 'Состояние лайка',
        },
        onLikeToggle: {
            action: 'clicked', 
            description: 'Коллбэк при клике на лайк',
        },
        onClickCardButton: {
            action: 'clicked', 
            description: 'Коллбэк при клике кнопку "ПОДРОБНЕЕ"',
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{
                // Темный фон, т.к. карточка белая
                backgroundColor: '#818181ff',
                padding: '100px',
            }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

// заглушка
const noop = () => {};

export const Default: Story = {
    name: "Default PersonCard",
    args: {
        person: mockPerson1,
        isLiked: mockPerson1.id,
        onLikeToggle: noop,
        onClickCardButton: noop,
    },
};

export const Liked: Story = {
    name: "Liked PersonCard",
    args: {
        person: mockPerson1,
        isLiked: mockPerson1.id,
        onLikeToggle: noop,
        onClickCardButton: noop,
    },
};

export const DifferentData: Story = {
    name: "Другие значения для PersonCard",
    args: {
        person: mockPerson2,
        isLiked: mockPerson2.id,
        onLikeToggle: noop,
        onClickCardButton: noop,
    },
};