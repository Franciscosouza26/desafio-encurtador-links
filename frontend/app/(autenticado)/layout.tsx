"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function AutenticadoLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) router.push("/");
    }, []);
    
    return(
      <>
          <Header  />
          {children}
          <Footer />
      </>
      );
}