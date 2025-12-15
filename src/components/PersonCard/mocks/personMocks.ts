import type { TPerson } from '../../ui/PersonCard/type';

export const mockPerson1: TPerson = {
    id: '11111111-1111-1111-1111-111111111111',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200',
    name: 'Иван Ковалёв',
    city: 'Санкт-Петербург',
    age: '34 года',
    skills: [
        {
        teach: ['Игра на барабанах'],
        wantsToLearn: ['Тайм менеджмент', 'Медитация', 'Йога'],
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