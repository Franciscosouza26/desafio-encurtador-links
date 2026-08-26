"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage({ params }: { params: { slug: string } }) {
    const router = useRouter();

    useEffect(() => {}, [params.slug]);

    return <p>Redirecionando...</p>;
}