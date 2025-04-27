import {Button, Card, CardActions, CardContent, CardHeader, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import DeleteButton from "./DeleteButton.tsx";
import CardCategoryProps from "../interface/CardCategory.tsx";

export function CardCategory(CardCategoryProps: CardCategoryProps) {
    return(
        <div key={`${CardCategoryProps.index} ${CardCategoryProps.category.id}`} style={{marginLeft:"1%", marginRight:"1%"}}>
            <Card sx={{ maxWidth: 345 }}>
                <Button onClick={() => CardCategoryProps.onClick(CardCategoryProps.category.name)}>
                    <CardHeader
                        title={CardCategoryProps.category.name}
                    />
                </Button>
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {CardCategoryProps.category.key}
                    </Typography>
                </CardContent>
                {
                    CardCategoryProps.user?.role ?
                        <CardActions disableSpacing >
                            <IconButton size={"large"} color={"secondary"} aria-label="modif category">
                                <EditIcon color="primary" />
                            </IconButton>
                            <DeleteButton id={CardCategoryProps.category.id} path={"category"} afterDelete={CardCategoryProps.fetchData}></DeleteButton>
                        </CardActions> : null
                }
            </Card>
        </div>
    )
}