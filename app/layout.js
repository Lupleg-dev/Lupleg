// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";
import TopNav from "@/components/TopNav";
import MainFooter from "@/components/MainFooter";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Building Africa's Tech Future",
  description:
    "Join us in shaping the future of technology in Africa! Our developer community empowers Africans with the skills and resources to solve problems, drive innovation, and create a more sustainable future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
