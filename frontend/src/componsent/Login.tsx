import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(password);
        console.log(email);

        try {
            const res = await axios.post("http://localhost:8080/login", {
                "email": email,
                "password": password,
            });

            const { token } = res.data.token;
            const userInfo = parseJwt(token);

            login(userInfo, token);

            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        } catch (error: any) {
            console.error(error);
            alert("Identifiants invalides ou erreur serveur");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Connexion</button>
        </form>
    );
};

function parseJwt(token: string) {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
}

export default Login;
