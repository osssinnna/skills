import type { Meta, StoryObj } from '@storybook/react';
import { PersonCard } from './PersonCard';
import { mockPerson1, mockPerson2, mockPerson3, mockPersons} from "./mocks/personMocks";

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
    },
    tags: ['autodocs']
};


export default meta;
type Story = StoryObj<typeof PersonCard>;

// заглушка
const noop = () => {};

export const Default: Story = {
    args: {
        person: mockPerson1,
        isLiked: false,
        onLikeToggle: noop,
    },
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

// export const Liked: Story = {
//   args: {
//     person: mockPerson1,
//     isLiked: true,
//     onLikeToggle: noop,
//   },
// };

// export const WithConsoleLog: Story = {
//   args: {
//     person: mockPerson1,
//     isLiked: false,
//     onLikeToggle: () => console.log('Лайк переключен!'),
//   },
// };

// export const WithAlert: Story = {
//   args: {
//     person: mockPerson1,
//     isLiked: false,
//     onLikeToggle: () => alert('Лайк переключен!'),
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'При клике на лайк покажется alert',
//       },
//     },
//   },
// };

// Пример с интерактивным состоянием
// export const Interactive: Story = {
//   args: {
//     person: mockPerson1,
//     isLiked: false,
//     onLikeToggle: () => {
//       console.log('PersonCard: Лайк переключен!');
//       // В реальном story можно использовать Storybook actions
//       // или просто логировать в консоль
//     },
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Кликните на иконку лайка. Проверьте консоль браузера.',
//       },
//     },
//   },
// };

// С разными данными
// export const WithManySkills: Story = {
//   args: {
//     person: {
//       ...mockPerson,
//       name: 'Мария Сидорова',
//       city: 'Санкт-Петербург',
//       age: '25 лет',
//       skills: [
//         {
//           teach: ['UI/UX дизайн', 'Figma', 'Photoshop', 'Прототипирование'],
//           wantsToLearn: ['3D моделирование', 'Motion design'],
//         },
//       ],
//     },
//     isLiked: false,
//     onLikeToggle: noop,
//   },
// };

// export const EmptySkills: Story = {
//   args: {
//     person: {
//       ...mockPerson,
//       name: 'Иван Иванов',
//       city: 'Казань',
//       age: '30 лет',
//       skills: [],
//     },
//     isLiked: true,
//     onLikeToggle: noop,
//   },
// };