import { useState, useEffect } from "react";
import type { Article } from "../interface/Article.tsx";
import fetchArticles from "../function/fetchArtciles.ts";
import { Link } from "react-router-dom";
import {Avatar, Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";

function Articles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchArticles();
                setArticles(data);
            } catch (error) {
                console.error("Erreur en récupérant les articles :", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            {articles.map((article: Article, index: number) => (
                <div key={`${index} ${article.id}`} style={{marginLeft:"1%", marginRight:"1%"}}>
                    <Link to={`/article/${article.id}`} style={{textDecoration:"none"}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src={article.User.avatar}/>
                                    </Avatar>
                                }
                                title={article.title}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {article.shortDescription}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {article.Category.key}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {article.User.lastName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Articles;
