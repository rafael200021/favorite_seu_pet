import { IAnimal } from "Interfaces/animal";
import {  useSetRecoilState } from "recoil"
import { animalList } from "store/atom";

const useUpdateAnimalList = () => {

    const setAnimalList = useSetRecoilState(animalList);

    return (animal: IAnimal) => {

        return setAnimalList(oldList => {
            const index = oldList.findIndex(item => item.id === animal.id);
            return [...oldList.slice(0, index), animal, ...oldList.slice(index + 1)];
        });
    }
}

export default useUpdateAnimalList;