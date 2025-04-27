import { useState, useEffect } from "react";
import type { Category } from "../interface/Category.tsx";
import fetchCategorys from "../function/fetchCategorys.ts";
import {Grid} from "@mui/material";
import {useAuthContext} from "../context/AuthContext.tsx";
import {CardCategory} from "../component/CardCategory.tsx";

function Categorys({ onClick }: { onClick: (value: string) => void } ) {
    const [categorys, setCategorys] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuthContext()

    async function fetchData() {
        try {
            const data = await fetchCategorys();
            setCategorys(data);
        } catch (error) {
            console.error("Erreur en récupérant les categorys :", error);
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
                {categorys.map((category: Category, index: number) => (
                        <CardCategory onClick={(e: string) => onClick(e)} index={index} category={category} user={user} fetchData={fetchData}></CardCategory>
                ))}
            </Grid>
        </div>
    );
}

export default Categorys;
