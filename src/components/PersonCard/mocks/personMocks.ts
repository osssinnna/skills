import type { TPerson } from '../../ui/PersonCard/type';

export const mockPerson1: TPerson = {
    id: '11111111-1111-1111-1111-111111111111',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200',
    name: 'Алексей Ковалёв',
    city: 'Москва',
    age: '32 года',
    skills: [
        {
        teach: ['Игра на барабанах'],
        wantsToLearn: ['Фотография', 'Английский язык'],
        },
    ],
};

export const mockPerson2: TPerson = {
    id: '22222222-2222-2222-2222-222222222222',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=200',
    name: 'Анна Смирнова',
    city: 'Санкт-Петербург',
    age: '35 лет',
    skills: [
        {
        teach: ['Рисование акварелью'],
        wantsToLearn: ['Видеомонтаж', 'Йога'],
        },
    ],
};

export const mockPerson3: TPerson = {
    id: '33333333-3333-3333-3333-333333333333',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=200',
    name: 'Михаил Фёдоров',
    city: 'Новосибирск',
    age: '27 лет',
    skills: [
        {
        teach: ['Портретная фотография'],
        wantsToLearn: ['Испанский язык'],
        },
    ],
};

export const mockPersons: TPerson[] = [
    mockPerson1,
    mockPerson2,
    mockPerson3,
];