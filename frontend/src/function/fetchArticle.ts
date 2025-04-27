import {Article} from "../interface/Article.tsx";
import axios from "axios";

async function fetchArtciles(id: number): Promise<Article> {
    const token = localStorage.getItem('token');
    console.log(import.meta.env.VITE_URL)

    const article = await axios.get(`${import.meta.env.VITE_URL}article/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log("articles", article);

    return article.data;
}

export default fetchArtciles;