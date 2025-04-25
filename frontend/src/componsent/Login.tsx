import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/login", {
                email,
                password,
            });

            console.log("Données reçues du backend :", res.data);

            const token = res.data.token;

            if (!token || typeof token !== "string") {
                console.error("Token invalide ou non fourni :", token);
                alert("Erreur serveur : token manquant");
                return;
            }

            const userInfo = parseJwt(token);
            console.log("Avant login → userInfo :", userInfo);
            console.log("Avant login → token :", token);

            login(userInfo, token);

            navigate("/");

            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (error: any) {
            console.error("Erreur dans handleSubmit :", error);
            alert("Identifiants invalides ou erreur serveur");
        }
    };

    return (
        <>
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
        </>
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
