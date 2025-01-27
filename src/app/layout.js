import { Montserrat } from "next/font/google";
import "./globals.css";

const dm_sans = Montserrat({ subsets: ["latin"], variable: "--font-dmSans" });

export const metadata = {
  title: "Keerthi Reddy Tummalapelly",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.variable}>{children}</body>
    </html>
  );
}
