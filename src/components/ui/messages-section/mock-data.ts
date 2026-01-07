import type { TMessageNotifying } from "../../../utils/types";
const today = new Date().toISOString();
// тест данные
export const unreadTestMessages: TMessageNotifying[] = [
      { userName:'Александр',
          userId: 12345,
          date: today,
          viewed: false,
          typeMessage:'confirmed',
      },
        { userName:'Олег',
          userId: 123456,
          date: today,
          viewed: false,
          typeMessage: 'offered',
      },
];
export const readTestMessages: TMessageNotifying[] = [
      { userName:'Николай',
          userId: 12345,
          date: today,
          viewed: true,
          typeMessage:'confirmed',
      },
        { userName:'Татьяна',
          userId: 123456,
          date: '23.12.2025',
          viewed: true,
          typeMessage: 'offered',
      },
]