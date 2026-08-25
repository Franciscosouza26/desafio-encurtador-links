"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortLink, setShortLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function isValidUrl(value: string) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  async function handleShorten(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isValidUrl(url)) {
      setError("Informe uma URL válida.");
      return;
    }

    setIsLoading(true);
    // Simulação local: sem backend ainda, apenas gera um slug fake.
    await new Promise((resolve) => setTimeout(resolve, 500));
    const slug = alias || Math.random().toString(36).slice(2, 8);
    setShortLink(slug);
    setIsLoading(false);
  }

  function handleCopy() {
    if (shortLink) navigator.clipboard.writeText(`labtec.satc.edu.br/link/${shortLink}`);
  }

  return (
    <section className="flex flex-col w-full h-full bg-blue-50 ">
      <div className="flex flex-row justify-between items-center outline-solid outline-slate-200 bg-white">
        <div className="flex flex-col justify-start items-start">
          <h1 className="ml-20 text-[30px] font-bold ">LabTec</h1>
          <p className="ml-20  text-[15px] text-gray-500">UniSatc</p>
        </div>
        <nav className="flex gap-5 items-center justify-end mr-10">
          <a
            href="#"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
          >
            Inicio
          </a>
          <a
            href="#"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
          >
            Meus Links
          </a>
          <a
            href="#"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
          >
            Estatisticas
          </a>
          <a
            href="#"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
          >
            Sobre
          </a>
        </nav>
      </div>

      <div className=" flex flex-col mt-10 w-full h-screen justify-center items-center p-50 font-sans">
        <h1 className="text-[30px] font-bold ">Encurte URLs com o LabTec</h1>
        <p className="text-[20px] text-gray-500">
          Transforme links longos em URLs e compartilhe com facilidade
        </p>

        <form
          onSubmit={handleShorten}
          className="flex flex-col  gap-5 p-5 mt-5 bg-white rounded-[10px] shadow-lg w-full"
        >
          <label className="text-[20px] font-bold ">URL original</label>
          <input
            className="border-1 border-gray-500 rounded-md h-12"
            placeholder="https://exemplo.com/pagina/muito/grande/que/ninguém/quer/compartilhar"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <h1 className="font-bold">Endereço personalizado</h1>
              <p className="text-gray-500">(opcional)</p>
              <span className="material-symbols-outlined text-gray-500">
                info
              </span>
            </div>
            <div className="flex flex-row items-center gap-2 border-1 border-gray-500 h-12 rounded-lg bg-slate-50">
              <p className="text-gray-500 ml-3">labtec.satc.edu.br/link/</p>
              <input
                className="border-gray-500 border-l-1 rounded-r-lg h-full w-full bg-white"
                placeholder="seu-alias-aqui"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </div>
            <p className="text-gray-500">
              Use apenas letras, números e hífens.
            </p>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center gap-1 w-35 h-10 bg-blue-600 rounded-lg text-white duration-[0.5s] hover:text-blue-600 hover:bg-transparent hover:border-1 hover:border-blue-600 disabled:opacity-50"
          >
            <span className="material-symbols-outlined">link_2</span>
            {isLoading ? "Encurtando..." : "Encurtar"}
          </button>
        </form>

        {shortLink && (
          <div className="flex flex-row w-full gap-5 p-5 mt-8 items-center border-gray-600 rounded-[10px] shadow-xl ">
            <span className="material-symbols-outlined bg-blue-200 text-[40px]! text-blue-600 p-4 rounded-[50px]">
              check
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="text-[18px] font-bold">
                URL encurtada com sucesso!
              </h1>
              <p className="text-gray-500">
                Sua URL está pronta para ser compartilhada.
              </p>
              <div className="flex flex-row gap-5 ">
                <p className="flex items-center border-1 border-gray-500 rounded-lg bg-white h-12 w-[650px] gap-2 text-blue-600 text-md font-bold ">
                  <span className="material-symbols-outlined ml-5">link_2</span>
                  labtec.satc.edu.br/link/{shortLink}
                </p>
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-1 h-12 w-30 border border-blue-600 mr-2  rounded-lg text-blue-600 duration-[0.5s] hover:bg-blue-600 hover:text-white "
                >
                  <span className="material-symbols-outlined">content_copy</span>
                  Copiar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <span className="material-symbols-outlined text-gray-500">
          verified_user
        </span>
        <p className="text-gray-500">
          Links seguros, rastreáveis e prontos para compartilhar
        </p>
      </div>
    </section>
  );
}
