import { useRecoilValue } from "recoil"
import { animalList } from "../atom"

export const useAnimalList = () => {

    const listOfAnimals = useRecoilValue(animalList);

    return listOfAnimals;

}