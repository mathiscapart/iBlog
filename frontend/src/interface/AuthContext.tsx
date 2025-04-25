import {User} from "./User.tsx";

export interface AuthContextType {
    user: User | null;
    login: (user: User, token: string) => void;
    logout: () => void;
}