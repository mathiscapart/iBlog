import {useAuthContext} from "../context/AuthContext.tsx";
import Categorys from "./Categorys.tsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import type {Article} from "../interface/Article.tsx";
import fetchArticles from "../function/fetchArtciles.ts";
import { Card, Box  } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Carousel from "react-material-ui-carousel";


function Home(){
    const { user } = useAuthContext()
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        try {
            const data = await fetchArticles();
            const dataSort = data.sort((a, b) => new Date(b.UpdateDate).getTime() - new Date(a.UpdateDate).getTime())
            setArticles(dataSort.slice(0,5));
        } catch (error) {
            console.error("Erreur en récupérant les articles :", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <p>Chargement...</p>;
    }


    return (
        <>
            <img src="../../public/fond_Home.png" alt={"fond"} style={{width:'100%'}} />
            <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:"row", margin:"10%", marginTop: 30, marginBottom: 30}}>
                <ArrowBackIosIcon color={"primary"} />
                <ArrowBackIosIcon color={"primary"} />
                <Typography color={"primary"} variant={"h5"} align={"center"} > L'espace où les experts partagent leurs idées,
                    leurs innovations et les dernières tendances en ingénierie logicielle,
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
                    <Carousel
                        animation="slide"
                        indicators={true}
                        navButtonsAlwaysVisible={true}
                        navButtonsAlwaysInvisible={false}
                        cycleNavigation={true}
                        fullHeightHover={false}
                        sx={{
                            maxWidth: "600px",
                            flexGrow: 1,
                            margin: "auto",
                            mt: 5,
                        }}
                    >
                        {articles.map((article) => (
                            <Card key={article.title} variant="outlined" style={{ display: 'flex', marginBottom: '20px' }}>
                                <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                                    <img
                                        srcSet={`${article.img}?h=120&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${article.img}?h=120&fit=crop&auto=format`}
                                        alt={article.title}
                                    />
                                </AspectRatio>
                                <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                                    <Typography variant="h6">{article.title}</Typography>
                                    <Typography variant="body2">{article.description}</Typography>
                                </Box>
                            </Card>
                        ))}
                    </Carousel>
                </>
            ) : (
                <p>Vous n'êtes pas connecté.</p>
            )}
        </>
    )
}

export default Home;