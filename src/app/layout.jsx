import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import MainMenu from "@/app/components/MainMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MIO Go",
  description:
    "Cliente de terceros para consultar saldo de forma rápida y eficiente, acceder a información detallada sobre el sistema MIO y explorar otras funcionalidades útiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col bg-slate-100`}>
        <Navbar />
        <main className="w-full h-full flex flex-col md:flex-row p-0 m-0">
          <MainMenu />
          <div className="flex-1 flex flex-col h-full"> {children}</div>
        </main>
      </body>
    </html>
  );
}
