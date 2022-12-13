import { useSetRecoilState } from "recoil";
import { filter } from "store/atom";

export const useUpdateFilter = () => {


    const setfilter = useSetRecoilState(filter);

    return (filter: string) => {

        setfilter(filter);

    }
}