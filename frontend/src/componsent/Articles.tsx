import { useState, useEffect } from "react";
import { Article } from "../interface/Article.tsx";
import fetchArticles from "../function/fetchArtciles.ts";
import { Link } from "react-router-dom";
import {Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";

function Articles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchArticles();
                console.log(data);
                console.log("data", data[0].category.key);
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
            {articles.map((article, index) => (
                <div key={`${index} ${article.id}`} style={{marginLeft:"1%", marginRight:"1%"}}>
                    <Link to={`/article/${article.id}`} style={{textDecoration:"none"}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                title={article.title}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {article.shortDescription}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {article.category.key}
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
