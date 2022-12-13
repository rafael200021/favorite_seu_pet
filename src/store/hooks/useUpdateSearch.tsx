import { useSetRecoilState } from "recoil";
import { search } from "store/atom";

export const useUpdateSearch = () => {


    const setSearch = useSetRecoilState(search);

    return (search: string) => {

        setSearch(search);

    }
}