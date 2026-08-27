import Link from "next/link";

export default function Home() {
    return(
        <div className="flex flex-col items-center justify-center h-full w-screen p-30">
            <form className="flex flex-col items-center justify-center gap-6 bg-white/50 backdrop-blur-sm  rounded-[15px] shadow-xl w-100 h-90 ">
                <h1 className="text-[45px] font-bold">LOGIN</h1>
                <input className="flex items-center rounded-[30px] bg-[rgb(232,243,247)]  text-black font-semibold p-3 w-70 shadow-md" placeholder="Email"></input>
                <input type="password" className="flex items-center rounded-[30px] bg-[rgb(232,243,247)] text-black font-semibold p-3 caret-blue-500 w-70 shadow-md " placeholder="Senha"></input>
                <div className="flex flex-row items-center justify-center gap-1">
                    <p className="">Esqueceu da Senha?</p>
                    <Link href="/inicio" className="text-blue-500 font-semibold ">Clique Aqui</Link>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-[20px] w-30 font-bold duration-[0.5s] hover:bg-transparent hover:text-blue-500 hover: border-1 hover:border-blue-500 ">Login</button>
            </form>
        </div>
    );
}
