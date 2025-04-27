import { useState, useEffect } from "react";
import type { Article } from "../interface/Article.tsx";
import fetchArticles from "../function/fetchArtciles.ts";
import { Grid } from "@mui/material";
import {useAuthContext} from "../context/AuthContext.tsx";
import {CardArticle} from "./CardArticle.tsx";

function CardArticles({filter}: {filter: string}) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuthContext()

    async function fetchData() {
        try {
            const data = await fetchArticles();
            setArticles(data);
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
        <div>
            <Grid container style={{marginLeft:"10%", marginRight:"10%"}} rowSpacing={4} columnSpacing={{ xs: 2, sm: 2, md: 3 }} direction="row"
                  sx={{
                      justifyContent: "space-between",
                      alignItems: "center",}}
            >
            {articles.filter((article) => article.title.includes(filter) || article.Category.key.includes(filter)).map((article: Article, index: number) => (
                <CardArticle index={index} article={article} user={user} fetchData={fetchData}></CardArticle>
            ))}
            </Grid>
        </div>
    );
}

export default CardArticles;
