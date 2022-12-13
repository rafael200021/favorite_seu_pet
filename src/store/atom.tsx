import { atom } from "recoil";
import { IAnimal } from "../Interfaces/animal";

export const animalList = atom<IAnimal[]>({
    key: "animalList",
    default: [
        {
            id: 1,
            name: "Cachorro",
            category: "Mamífero",
            isFavorite: false,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci vel et, eveniet voluptatem necessitatibus, quo corporis dolor nulla nam atque sit nemo ad rerum eum, culpa facilis fuga laudantium?',
            urlImage: '/assets/images/dog.jpg'
        },
        {
            id: 2,
            name: "Gato",
            category: "Mamífero",
            isFavorite: false,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci vel et, eveniet voluptatem necessitatibus, quo corporis dolor nulla nam atque sit nemo ad rerum eum, culpa facilis fuga laudantium?',
            urlImage: '/assets/images/cat.jpg'
        }
    ]
})

export const search = atom<string>({
    key: "search",
    default: "",
})

export const filter = atom<string>({
    key: "filter",
    default: "",
})