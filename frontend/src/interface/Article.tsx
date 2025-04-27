import {User} from "./User.tsx";
import {Category} from "./Category.tsx";

export interface Article{
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    enable: boolean;
    User: User;
    Category: Category;
}