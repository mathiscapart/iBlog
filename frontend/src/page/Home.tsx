import {useAuthContext} from "../context/AuthContext.tsx";
import Categorys from "./Categorys.tsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";

function Home(){
    const { user } = useAuthContext()

    return (
        <>
            <img src="../../public/fond_Home.png" alt={"fond"} style={{width:'100%'}} />
            <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:"row", margin:"10%", marginTop: 30, marginBottom: 30}}>
                <ArrowBackIosIcon color={"primary"} />
                <ArrowBackIosIcon color={"primary"} />
                <Typography color={"primary"} variant={"h5"}  > L'espace où les experts partagent leurs idées,
                    leurs innov ations et les dernières tendances en ingénierie logicielle,
                    pour inspirer et faire grandir la communauté tech.</Typography>
                <ArrowForwardIosIcon color={"primary"} />
                <ArrowForwardIosIcon color={"primary"} />
            </div>
            { user ? (
                <>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: "row"}}>
                        <Typography variant={"h6"}>Bienvenue, {user.firstName} !</Typography>
                    </div>

                    <Categorys></Categorys>
                </>
            ) : (
                <p>Vous n'êtes pas connecté.</p>
            )}
        </>
    )
}

export default Home;