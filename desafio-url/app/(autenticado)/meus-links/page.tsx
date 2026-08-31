"use client";

import { useEffect, useState } from "react";
import { api } from "@/app/lib/api";

type Url = {
    id: number;
    shortCode: string;
    link: string;
    access_count: string;
    lastAcess: string  | null;
};

export default function Page() {
    const [links, setLinks] = useState<Url[]>([]);
    const [error, setError] = useState<string  | null>(null);

    useEffect(() => {
        async function loadLinks() {
            try {
            const { data } = await api.get("/url/user/list");
            setLinks(data);
        }   catch {
            setError("Não foi possível carregar seus links. ");
        }
    }
    loadLinks();
}, []);

if (error) return <p className="text-red-500">{error}</p>;

return (
    <div className="flex flex-col gap-4 p-10">
        {links.map((l) => (
            <div key={l.id} className="flex flex-row justify-between border rounded-lg p-4">
                <span>https://labtec.satc.edu.br/link/{l.shortCode}</span>
                <span>{l.link}</span>
                <span>{l.access_count} acessos</span>
            </div>
        ))}
    </div>
);

}