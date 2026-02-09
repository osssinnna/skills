import type { Meta, StoryObj } from "@storybook/react";
import { CardsGrid } from "../ui/cards-grid/cards-grid";
import mockUsers from "../../mock/mockUser.json";
import type { User } from "../../utils/types";

// Мокаем данные для Storybook
const typedUsers: User[] = (mockUsers as any[]).map((user) => ({
  id: user.id,
  avatarUrl: user.avatarUrl,
  name: user.name,
  description: user.description ?? "",
  location: user.location,
  age: user.age,
  gender: (user.gender ?? null) as "Мужской" | "Женский" | null,
  skillCanTeach: {
    name: user.skillCanTeach?.name ?? "",
    description: user.skillCanTeach?.description ?? "",
    categoryId: user.skillCanTeach?.categoryId ?? 0,
    subcategoryId: user.skillCanTeach?.subcategoryId ?? 0,
  },
  images: user.images ?? [],
  subcategoriesWantToLearn: (user.subcategoriesWantToLearn ?? []).map(
    (s: any) => ({
      id: s.id,
      name: s.name ?? "",
      categoryId: s.categoryId ?? 0,
    })
  ),
  categoriesWantToLearn: user.categoriesWantToLearn ?? [],
  likesCount: user.likesCount ?? 0,
  likedByUserIds: user.likedByUserIds ?? [],
  createdAt: user.createdAt ?? new Date().toISOString(),
}));

const meta: Meta<typeof CardsGrid> = {
  title: "Components/CardsGrid",
  component: CardsGrid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Компонент сетки для отображения карточек пользователей в виде сетки. Автоматически адаптируется под размер экрана.",
      },
    },
  },
  argTypes: {
    users: {
      description: "Массив пользователей для отображения",
      table: {
        type: { summary: "User[]" },
      },
    },
    onLikeToggle: {
      action: "onLikeToggle",
      description: "Коллбэк при клике на лайк в карточке пользователя",
      table: {
        type: { summary: "(userId: number) => void" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardsGrid>;

// 🟦 Базовое состояние компонента
export const Default: Story = {
  name: "Default",
  args: {
    users: typedUsers,
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартное состояние сетки с несколькими пользователями.",
      },
    },
  },
};

// 🟥 Состояние с одним пользователем
export const SingleUser: Story = {
  name: "Single User",
  args: {
    users: typedUsers.slice(0, 1),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Сетка с одним пользователем. Показывает адаптивность компонента.",
      },
    },
  },
};

// 🟨 Пустое состояние
export const Empty: Story = {
  name: "Empty State",
  args: {
    users: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Состояние, когда нет пользователей для отображения.",
      },
    },
  },
};

// 🟪 Минимальное количество пользователей
export const FewUsers: Story = {
  name: "Few Users",
  args: {
    users: typedUsers.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story: "Сетка с небольшим количеством пользователей.",
      },
    },
  },
};
