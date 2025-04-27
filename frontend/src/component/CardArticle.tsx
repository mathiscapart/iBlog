import {Link} from "react-router-dom";
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import DeleteButton from "./DeleteButton.tsx";
import AddIcon from '@mui/icons-material/Add';
import CardArticleProps from "../interface/CardArticle.tsx";

export function CardArticle(CardArticleProps: CardArticleProps) {
    return(
        <div key={`${CardArticleProps.index} ${CardArticleProps.article.id}`} style={{marginLeft:"1%", marginRight:"1%"}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            <img alt={CardArticleProps.article.User.lastName} src={CardArticleProps.article.User.avatar}/>
                        </Avatar>
                    }
                    action={
                        <Link to={`/article/${CardArticleProps.article.id}`} style={{textDecoration:"none"}}>
                            <IconButton aria-label="settings">
                                <AddIcon color={"primary"} />
                            </IconButton>
                        </Link>
                    }
                    title={CardArticleProps.article.title}
                />
                <CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={CardArticleProps.article.img}
                        alt={CardArticleProps.article.img}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {CardArticleProps.article.shortDescription}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {CardArticleProps.article.Category.key}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {CardArticleProps.article.User.lastName}
                    </Typography>
                </CardContent>
                {
                    CardArticleProps.user?.role ?
                        <CardActions disableSpacing >
                            <IconButton size={"large"} color={"secondary"} aria-label="modif article">
                                <EditIcon color="primary" />
                            </IconButton>
                            <DeleteButton id={CardArticleProps.article.id} path={"article"} afterDelete={CardArticleProps.fetchData}></DeleteButton>
                        </CardActions> : null
                }
            </Card>
        </div>
    )
}