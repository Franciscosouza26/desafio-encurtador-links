"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage({ params }: { params: { slug: string } }) {
    useEffect(() => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/url/${params.slug}`;
    }, [params.slug]);

    return <p>Redirecionando...</p>;
}