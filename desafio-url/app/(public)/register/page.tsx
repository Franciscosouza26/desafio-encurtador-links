"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { api } from "@/app/lib/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await api.post("/auth/register/public", { name, password, email });
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data;
        const messages =
          typeof data == "object" && data !== null
            ? Object.values(data).filter((v) => typeof v === "string")
            : [];
        setError(
          messages.length > 0
            ? messages.join(" ")
            : "Não foi possível criar a conta.",
        );
      } else {
        setError("Não foi possível criar a conta.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center jusatify-center h-full w-screen p-30">
      <form
        onSubmit={handleRegister}
        className=" flex flex-col items-center justify-center gap-6 bg-white/50 backdrop-blur-sm rounded-[15px] shadow-xl w-100 py-10"
      >
        <h1 className="text-[45px] font-bold">CADASTRO</h1>
        <input
          className="flex items-center rounded-[30px] bg-[rgb(232,243,247)]  text-black font-semibold p-3 w-70 shadow-md"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
        <input
          className="flex items-center rounded-[30px] bg-[rgb(232,243,247)]  text-black font-semibold p-3 w-70 shadow-md"
          placeholder="Digite um email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          className="flex items-center rounded-[30px] bg-[rgb(232,243,247)] text-black font-semibold p-3 caret-blue-500 w-70 shadow-md "
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex flex-row items-center justify-center gap-1">
          <p className="Já tem conta?"></p>
          <Link href="/register" className="text-blue-500 font-semibold">
            Fazer Login
          </Link>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white p-2 rounded-[20px] w-30 font-bold duration-[0.5s] hover:bg-transparent hover:text-blue-500 hover: border-1 hover:border-blue-500 "
        >
          {isLoading ? "Login..." : "Cadastre-se"}
        </button>
      </form>
    </div>
  );
}
