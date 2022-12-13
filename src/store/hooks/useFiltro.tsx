import { useRecoilValue } from "recoil"
import { filter } from "store/atom";

export const useFilter = () => {
    const filterValue = useRecoilValue(filter);
    return filterValue;
}