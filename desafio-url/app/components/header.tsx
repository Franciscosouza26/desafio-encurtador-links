import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center outline-solid outline-slate-200 bg-white">
      <div className="flex flex-col justify-start items-start">
        <h1 className="ml-20 text-[30px] font-bold ">LabTec</h1>
        <p className="ml-20  text-[15px] text-gray-500 font-semibond">UniSatc</p>
      </div>
      <nav className="flex gap-5 items-center justify-end mr-10">
        <Link
          href="/inicio"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
        >
          Inicio
        </Link>
        <Link
          href="/meus-links"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
        >
          Meus Links
        </Link>
        <Link
          href="/estatistica"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
        >
          Estatisticas
        </Link>
        <Link
          href="/sobre"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 font-semibold"
        >
          Sobre
        </Link>
      </nav>
    </div>
  );
}
