import CardArticles from "../component/CardArticles.tsx";
import Search from "../component/Search.tsx";
import {useState} from "react";

export default function Articles({filter}: { filter: string | undefined }) {
    const [search, setSearch] = useState<string>("");

    if (filter)setSearch(filter);

    return (
        <>
            <Search onChanged={(e:string) => setSearch(e)}></Search>
            <CardArticles filter={search}/>
        </>
    )
}