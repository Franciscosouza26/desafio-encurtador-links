"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { api } from "@/app/lib/api";

export default function Home() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState <string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleLogin(e: React.FormEvent ) {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const { data } = await api.post("/auth/login/public", { email, password });
            localStorage.setItem("token", data.JwtToken);
            router.push("/inicio");
        }   catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data.message ?? "Email ou senha inválidos.");
            } else {
                setError("Erro ao fazer login. ");
            }
        }   finally {
            setIsLoading(false);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center h-full w-screen p-30">
            <form className="flex flex-col items-center justify-center gap-6 bg-white/50 backdrop-blur-sm  rounded-[15px] shadow-xl w-100 h-90 " onSubmit={handleLogin}>
                <h1 className="text-[45px] font-bold">LOGIN</h1>
                <input className="flex items-center rounded-[30px] bg-[rgb(232,243,247)]  text-black font-semibold p-3 w-70 shadow-md" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" className="flex items-center rounded-[30px] bg-[rgb(232,243,247)] text-black font-semibold p-3 caret-blue-500 w-70 shadow-md " placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex flex-row items-center justify-center gap-1">
                    <p className="text-red-500 font-semibold">Ainda não possui conta?</p>
                    <Link href="/register" className="text-blue-500 font-semibold">Cadastre-se</Link>
                </div>
                <button type="submit" disabled={isLoading}className="bg-blue-500 text-white p-2 rounded-[20px] w-30 font-bold duration-[0.5s] hover:bg-transparent hover:text-blue-500 hover: border-1 hover:border-blue-500 ">{isLoading ? "Entrando..." : "Login"}</button>
            </form>
        </div>
    );
}
