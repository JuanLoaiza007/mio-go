import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MIO Go",
  description:
    "Cliente de terceros para consultar saldo de forma rápida y eficiente, acceder a información detallada sobre el sistema MIO y explorar otras funcionalidades útiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
