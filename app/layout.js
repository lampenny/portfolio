import { Rubik } from "next/font/google";
import "./globals.css";

const rubikSans = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Penny Lam",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubikSans.className} antialiased bg-gradient-to-r from-[#eeaecb] to-[#94bbe9]`}
      >
        {children}
      </body>
    </html>
  );
}
