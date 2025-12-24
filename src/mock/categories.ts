import type { Category, Subcategory } from "../utils/types";

export const categories: (Category & { subcategories: Subcategory[] })[] = [
  {
    id: "1",
    name: "Творчество и искусство",
    subcategories: [
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "102",
        name: "Рисование и иллюстрация",
        categoryId: "1",
      },
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "104",
        name: "Видеомонтаж",
        categoryId: "1",
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
      {
        id: "107",
        name: "Графический дизайн",
        categoryId: "1",
      },
      {
        id: "108",
        name: "Актёрское мастерство",
        categoryId: "1",
      },
    ],
  },
  {
    id: "10",
    name: "Дом и сад",
    subcategories: [
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
      {
        id: "1003",
        name: "Ремонт своими руками",
        categoryId: "10",
      },
      {
        id: "1004",
        name: "Ландшафтный дизайн",
        categoryId: "10",
      },
      {
        id: "1005",
        name: "Уход за растениями",
        categoryId: "10",
      },
      {
        id: "1006",
        name: "Организация пространства",
        categoryId: "10",
      },
    ],
  },
  {
    id: "2",
    name: "Иностранные языки",
    subcategories: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
      {
        id: "203",
        name: "Французский язык",
        categoryId: "2",
      },
      {
        id: "204",
        name: "Немецкий язык",
        categoryId: "2",
      },
      {
        id: "205",
        name: "Китайский язык",
        categoryId: "2",
      },
      {
        id: "206",
        name: "Японский язык",
        categoryId: "2",
      },
      {
        id: "207",
        name: "Итальянский язык",
        categoryId: "2",
      },
    ],
  },
  {
    id: "3",
    name: "Здоровье и лайфстайл",
    subcategories: [
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "302",
        name: "Медитация",
        categoryId: "3",
      },
      {
        id: "303",
        name: "Правильное питание",
        categoryId: "3",
      },
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
      {
        id: "305",
        name: "Психотерапия и коучинг",
        categoryId: "3",
      },
      {
        id: "306",
        name: "Здоровый сон",
        categoryId: "3",
      },
      {
        id: "307",
        name: "Дыхательные практики",
        categoryId: "3",
      },
    ],
  },
  {
    id: "4",
    name: "Технологии и IT",
    subcategories: [
      {
        id: "401",
        name: "Веб-разработка",
        categoryId: "4",
      },
      {
        id: "402",
        name: "Мобильная разработка",
        categoryId: "4",
      },
      {
        id: "403",
        name: "Data Science",
        categoryId: "4",
      },
      {
        id: "404",
        name: "Кибербезопасность",
        categoryId: "4",
      },
      {
        id: "405",
        name: "UI/UX дизайн",
        categoryId: "4",
      },
      {
        id: "406",
        name: "DevOps",
        categoryId: "4",
      },
      {
        id: "407",
        name: "Искусственный интеллект",
        categoryId: "4",
      },
      {
        id: "408",
        name: "Тестирование ПО",
        categoryId: "4",
      },
    ],
  },
  {
    id: "5",
    name: "Спорт и активный отдых",
    subcategories: [
      {
        id: "501",
        name: "Футбол",
        categoryId: "5",
      },
      {
        id: "502",
        name: "Баскетбол",
        categoryId: "5",
      },
      {
        id: "503",
        name: "Плавание",
        categoryId: "5",
      },
      {
        id: "504",
        name: "Бег и марафоны",
        categoryId: "5",
      },
      {
        id: "505",
        name: "Велоспорт",
        categoryId: "5",
      },
      {
        id: "506",
        name: "Скалолазание",
        categoryId: "5",
      },
      {
        id: "507",
        name: "Танцы",
        categoryId: "5",
      },
    ],
  },
  {
    id: "6",
    name: "Кулинария и выпечка",
    subcategories: [
      {
        id: "601",
        name: "Итальянская кухня",
        categoryId: "6",
      },
      {
        id: "602",
        name: "Азиатская кухня",
        categoryId: "6",
      },
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
      {
        id: "604",
        name: "Вегетарианская кухня",
        categoryId: "6",
      },
      {
        id: "605",
        name: "Кухня народов мира",
        categoryId: "6",
      },
      {
        id: "606",
        name: "Барное искусство",
        categoryId: "6",
      },
    ],
  },
  {
    id: "7",
    name: "Ремесла и handmade",
    subcategories: [
      {
        id: "701",
        name: "Вязание",
        categoryId: "7",
      },
      {
        id: "702",
        name: "Гончарное дело",
        categoryId: "7",
      },
      {
        id: "703",
        name: "Столярное дело",
        categoryId: "7",
      },
      {
        id: "704",
        name: "Шитьё и кройка",
        categoryId: "7",
      },
      {
        id: "705",
        name: "Ювелирное искусство",
        categoryId: "7",
      },
    ],
  },
  {
    id: "8",
    name: "Бизнес и финансы",
    subcategories: [
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "802",
        name: "Маркетинг",
        categoryId: "8",
      },
      {
        id: "803",
        name: "Управление проектами",
        categoryId: "8",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "805",
        name: "Личные финансы",
        categoryId: "8",
      },
      {
        id: "806",
        name: "Продажи",
        categoryId: "8",
      },
      {
        id: "807",
        name: "Бизнес-аналитика",
        categoryId: "8",
      },
    ],
  },
  {
    id: "9",
    name: "Наука и образование",
    subcategories: [
      {
        id: "901",
        name: "Математика",
        categoryId: "9",
      },
      {
        id: "902",
        name: "Физика",
        categoryId: "9",
      },
      {
        id: "903",
        name: "Химия",
        categoryId: "9",
      },
      {
        id: "904",
        name: "Биология",
        categoryId: "9",
      },
      {
        id: "905",
        name: "Программирование для детей",
        categoryId: "9",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
      {
        id: "907",
        name: "Литература",
        categoryId: "9",
      },
      {
        id: "908",
        name: "Философия",
        categoryId: "9",
      },
    ],
  },
];
