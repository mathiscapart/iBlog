import {User} from "./User.tsx";

export interface AuthContextType {
    user: User | null;
    token: string;
    login: (user: User, token: string) => void;
    logout: () => void;
}