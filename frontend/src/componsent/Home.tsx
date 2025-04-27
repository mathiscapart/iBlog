import {useAuthContext} from "../context/AuthContext.tsx";
import Articles from "./Articles.tsx";

function Home(){
    const { user } = useAuthContext()

    return (
        <>
            <h1>{user ? (
                <>
                    <p>Bienvenue, {user.email} !</p>
                    <Articles/>
                </>
            ) : (
                <p>Vous n'êtes pas connecté.</p>
            )}</h1>
        </>
    )
}

export default Home;