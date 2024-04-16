import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "authentication technical",
  description: "nextjs auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-inherit`}>
        <Header />
        <div className="container lg:w-[80%] w-[98%] m-auto">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
