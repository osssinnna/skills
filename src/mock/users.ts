import type { User } from "../utils/types";

export const usersData: User[] = [
  {
    id: "56565656-aaaa-bbbb-cccc-dddddddddddd",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rainie_Yang.jpg/250px-Rainie_Yang.jpg",
    name: "Екатерина Смирнова",
    location: "Ярославль",
    age: "04.09.1994",
    gender: "Женский",
    skillCanTeach: {
      name: "Литература",
      description: "Разбор художественных текстов и развитие критического мышления.",
      categoryId: "9",
      subcategoryId: "907",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Mundo_marino_orca.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Mundo_marino_lobomarino_en_troncomovil.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Prachtgefieder_eines_Blauen_Pfaus.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ocean%C3%A1rio_de_Lisboa_%281%29_-_Mar_2010.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
      {
        id: "105",
        name: "Креативное письмо",
        categoryId: "1",
      },
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
  {
    id: "ffffffff-6666-6666-6666-666666666666",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/160730_%EC%98%A4%EB%A7%88%EC%9D%B4%EA%B1%B8_%EC%95%84%EB%A6%B0_%EB%B4%89%ED%99%94%EC%9D%80%EC%96%B4%EC%B6%95%EC%A0%9C_5.jpg/250px-160730_%EC%98%A4%EB%A7%88%EC%9D%B4%EA%B1%B8_%EC%95%84%EB%A6%B0_%EB%B4%89%ED%99%94%EC%9D%80%EC%96%B4%EC%B6%95%EC%A0%9C_5.jpg",
    name: "Ольга Романова",
    location: "Санкт-Петербург",
    age: "09.11.1991",
    gender: "Женский",
    skillCanTeach: {
      name: "Графический дизайн",
      description: "Обучаю основам графического дизайна, композиции и работе в Figma.",
      categoryId: "1",
      subcategoryId: "107",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Dolphin_Marine_Magic.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Nymphicus_hollandicus_-_Forst_01.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "405",
        name: "UI/UX дизайн",
        categoryId: "4",
      },
      {
        id: "802",
        name: "Маркетинг",
        categoryId: "8",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["11111111-1111-1111-1111-111111111111"],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
  {
    id: "0acc8860-a931-4317-801c-895941a82ba9",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Trabajadora_agricola_de_Quemchi_%2C_Cultivando_zanahorias.jpg/120px-Trabajadora_agricola_de_Quemchi_%2C_Cultivando_zanahorias.jpg",
    name: "Оксана Белова",
    location: "Новосибирск",
    age: "09.03.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #1",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "801",
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/9/98/Dino_park_Zg2.jpg"],
    subcategoriesWantToLearn: [
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "701",
        name: "Вязание",
        categoryId: "7",
      },
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "99999999-7777-7777-7777-777777777777",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2018-10-10_Sport_climbing_Boys%27_combined_at_2018_Summer_Youth_Olympics_%28Martin_Rulsch%29_086.jpg/250px-2018-10-10_Sport_climbing_Boys%27_combined_at_2018_Summer_Youth_Olympics_%28Martin_Rulsch%29_086.jpg",
    name: "Сергей Лебедев",
    location: "Новосибирск",
    age: "27.04.1988",
    gender: "Мужской",
    skillCanTeach: {
      name: "Веб-разработка",
      description: "Frontend и backend основы: HTML, CSS, JavaScript и REST API.",
      categoryId: "4",
      subcategoryId: "401",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Solingen_-_Vogel-_und_Tierpark_15_ies.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Ciconia_ciconia_-_Forst_-_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Dolphinsurfresize.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "203",
        name: "Французский язык",
        categoryId: "2",
      },
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
      {
        id: "803",
        name: "Управление проектами",
        categoryId: "8",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "ffffffff-6666-6666-6666-666666666666",
    ],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=200",
    name: "Михаил Фёдоров",
    location: "Новосибирск",
    age: "05.09.1997",
    gender: "Мужской",
    skillCanTeach: {
      name: "Портретная фотография",
      description:
        "Фотографирую людей больше 7 лет. Научу работать со светом, ставить позы и ловить эмоции.",
      categoryId: "1",
      subcategoryId: "103",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dolphin_Centre%2C_Tin_Can_Bay%2C_Queensland%2C_2016.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
      {
        id: "105",
        name: "Креативное письмо",
        categoryId: "1",
      },
      {
        id: "106",
        name: "Арт-терапия",
        categoryId: "1",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "11111111-1111-1111-1111-111111111111",
      "22222222-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },
  {
    id: "34343434-9999-9999-9999-999999999999",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/D%27Arcy_Norman%2C_Professional_iPhone_Photographer_%284728847341%29.jpg/250px-D%27Arcy_Norman%2C_Professional_iPhone_Photographer_%284728847341%29.jpg",
    name: "Павел Никитин",
    location: "Краснодар",
    age: "30.07.1984",
    gender: "Мужской",
    skillCanTeach: {
      name: "Футбол",
      description: "Индивидуальные тренировки, техника и физическая подготовка.",
      categoryId: "5",
      subcategoryId: "501",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lake_China_Dinosaurs_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Solingen_-_Vogel-_und_Tierpark_17_ies.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "504",
        name: "Бег и марафоны",
        categoryId: "5",
      },
      {
        id: "303",
        name: "Правильное питание",
        categoryId: "3",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["99999999-7777-7777-7777-777777777777"],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=200",
    name: "Анна Смирнова",
    location: "Санкт-Петербург",
    age: "28.11.1989",
    gender: "Женский",
    skillCanTeach: {
      name: "Рисование акварелью",
      description:
        "Люблю акварель за её живость и непредсказуемость. Научу смешивать цвета, работать с водой и делать воздушные заливки.",
      categoryId: "1",
      subcategoryId: "102",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Watercolor_Painting_by_Octavius_Oakley.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Untitled_%28First_Abstract_Watercolor%29_by_Wassily_Kandinsky.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "104",
        name: "Видеомонтаж",
        categoryId: "1",
      },
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },
  {
    id: "bbbbbbbb-2222-2222-2222-222222222222",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Patty_Wu%27s_signing_with_Wacoal_sports_bra_20120616.jpg/250px-Patty_Wu%27s_signing_with_Wacoal_sports_bra_20120616.jpg",
    name: "Мария Соколова",
    location: "Екатеринбург",
    age: "07.08.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Рисование и иллюстрация",
      description: "Обучаю академическому рисунку, скетчингу и работе с цветом.",
      categoryId: "1",
      subcategoryId: "102",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Penguins_Loro_Parque_11.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "104",
        name: "Видеомонтаж",
        categoryId: "1",
      },
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["aaaaaaaa-1111-1111-1111-111111111111"],
    createdAt: "2025-12-15T17:10:31.263939+00:00",
  },
];
