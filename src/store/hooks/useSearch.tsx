import { useRecoilValue } from "recoil"
import { search } from "store/atom";

export const useSearch = () => {
    const searchValue = useRecoilValue(search);
    return searchValue;
}