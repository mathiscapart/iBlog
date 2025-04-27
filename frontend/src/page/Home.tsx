import {useAuthContext} from "../context/AuthContext.tsx";
import Categorys from "./Categorys.tsx";
import {useState} from "react";
import Articles from "./Articles.tsx";

function Home(){
    const { user } = useAuthContext()
    const [ category, setCategory] = useState<string>();

    return (
        <>
            <h1>{user ? (
                <>
                    <p>Bienvenue, {user.email} !</p>
                    <Categorys onClick={(e: string)=> setCategory(e)}></Categorys>
                    <Articles filter={category}></Articles>
                </>
            ) : (
                <p>Vous n'êtes pas connecté.</p>
            )}</h1>
        </>
    )
}

export default Home;