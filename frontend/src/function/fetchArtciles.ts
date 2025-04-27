import {Article} from "../interface/Article.tsx";
import axios from "axios";

async function fetchArtciles(): Promise<Article[]> {
    const token = localStorage.getItem('token');
    console.log(import.meta.env.VITE_URL)

    const articles = await axios.get(`${import.meta.env.VITE_URL}article`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log("articles", articles);

    return articles.data;
}

export default fetchArtciles;